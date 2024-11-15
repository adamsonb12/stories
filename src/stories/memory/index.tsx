import { useEffect } from "react";
import { useMemoryGameReducer } from "./state";

export const MemoryGame = () => {
    const { state, dispatch } = useMemoryGameReducer();

    useEffect(() => {
        dispatch({ type: "POPULATE_IMAGES_AND_CARDS", payload: [
            "https://images.unsplash.com/photo-1657204982364-a480ed1d2705?q=80&w=3087",
            "https://picsum.photos/id/100/600/400",
            "https://picsum.photos/id/200/600/400",
            "https://picsum.photos/id/300/600/400",
            "https://picsum.photos/id/400/600/400",
            "https://picsum.photos/id/500/600/400",
            "https://picsum.photos/id/600/600/400",
        ] });
    }, []);

    useEffect(() => {
        if (state.isGameWon) {
            alert("You won!");
        }
    }, [state.isGameWon]);
    console.log("🚀 ~ MemoryGame ~ state.isGameWon:", state.isGameWon)

    return <div className="flex flex-col gap-4">
        <h1>Memory Game</h1>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {state.cards.map((card) => (
                <div key={card.id} className="overflow-hidden rounded-md cursor-pointer" onClick={() => dispatch({ type: "SELECT_CARD", payload: card.id })} style={{ backgroundColor: "green", width: "100px", aspectRatio: "1/1" }}>
                    <img src={state.images.find((image) => image.id === card.imageId)?.src} alt="Memory Game" className="w-full h-full object-cover rounded-md" style={{ opacity: card.isMatched || state.selectedCardIds.includes(card.id) ? 1 : 0 }} />
                </div>
            ))}
        </div>
    </div>
}
