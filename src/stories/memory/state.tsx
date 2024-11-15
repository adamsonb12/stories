import { useReducer } from "react";
import { v4 } from "uuid";

interface Card {
    id: string;
    isMatched: boolean;
    imageId: string;
}

interface Image {
    id: string;
    src: string;
}

interface MemoryGameState {
    cards: Card[];
    images: Image[];
    selectedCardIds: string[];
    isGameWon: boolean;
}

// ACTIONS
interface SelectCard {
    type: "SELECT_CARD";
    payload: string;
}

interface PopulateImagesAndCards {
    type: "POPULATE_IMAGES_AND_CARDS";
    payload: string[]
}

type MemoryGameAction = SelectCard | PopulateImagesAndCards;

const initialState: MemoryGameState = {
    cards: [],
    images: [],
    selectedCardIds: [],
    isGameWon: false,
};

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

const MemoryGameReducer = (prevState: MemoryGameState, action: MemoryGameAction): MemoryGameState => {
    switch (action.type) {
        case "POPULATE_IMAGES_AND_CARDS":
            const images = action.payload.map((src) => ({ id: v4(), src }));
            const cards = images.flatMap((image) => [
                { id: v4(), isMatched: false, imageId: image.id },
                { id: v4(), isMatched: false, imageId: image.id },
            ]);

            const shuffledCards = shuffleArray(cards);

            return { ...prevState, images, cards: shuffledCards };
        case "SELECT_CARD":
            const card = prevState.cards.find((card) => card.id === action.payload);
            if (card?.isMatched || prevState.isGameWon) {
                return prevState;
            }
            
            // Have a match
            if (prevState.selectedCardIds.length === 1 && !prevState.selectedCardIds.includes(action.payload)) {
                const previouslySelectedCard = prevState.cards.find(c => c.id === prevState.selectedCardIds[0])
                if (previouslySelectedCard?.imageId === card?.imageId) {

                    // TODO => game is won logic
                    return { ...prevState, cards: prevState.cards.map((c) => ({ ...c, isMatched: c.isMatched || c.imageId === card?.imageId })), selectedCardIds: [] };
                }
            }

            // Remove a card from the selected cards
            if (prevState.selectedCardIds.includes(action.payload)) {
                return { ...prevState, selectedCardIds: prevState.selectedCardIds.filter((id) => id !== action.payload) };
            }

            if (prevState.selectedCardIds.length === 2) {
                return prevState;
            }

            // Add a card to the selected cards
            return { ...prevState, selectedCardIds: [...prevState.selectedCardIds, action.payload] };
        default:
            return prevState;
    }
}

export const useMemoryGameReducer = (defaultState?: MemoryGameState) => {
    const [state, dispatch] = useReducer(MemoryGameReducer, defaultState ?? initialState);

    return { state, dispatch };
}
