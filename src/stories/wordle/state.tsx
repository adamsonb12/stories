import { createContext, Dispatch, useContext, useReducer } from "react";
import { v4 } from "uuid";

export interface WordleGuess {
    id: string;
    guess: string;
}

interface WordleState {
    word: string;
    guesses: WordleGuess[];
    userInput: string;
    guessLimit: number;
}

// ACTIONS
interface UpdateWordleWord {
    type: "UPDATE_WORDLE_WORD";
    payload: string;
}

interface UpdateUserInput {
    type: "UPDATE_USER_INPUT";
    payload: string;
}

interface SubmitGuess {
    type: "SUBMIT_GUESS";
    payload: string;
}

type WordleAction = UpdateWordleWord | UpdateUserInput | SubmitGuess;

// REDUCER
const wordleReducer = (prevState: WordleState, action: WordleAction): WordleState => {
    switch (action.type) {
        case "UPDATE_WORDLE_WORD":
            return { ...prevState, word: action.payload, guesses: [], userInput: "" };
        case "UPDATE_USER_INPUT":
            if (action.payload.length > prevState.word.length) {
                return prevState;
            }

            return { ...prevState, userInput: action.payload };
        case "SUBMIT_GUESS":
            if (prevState.userInput.length !== prevState.word.length) {
                return prevState;
            }

            return { ...prevState, guesses: [...prevState.guesses, { id: v4(), guess: action.payload }] };
        
        default:
            return prevState;
    }
}

const useWordleReducer = (defaultState?: WordleState) => {
    const [state, dispatch] = useReducer(wordleReducer, defaultState ?? initialState);
    return { state, dispatch };
}

export const initialState: WordleState = {
    word: "hello",
    guesses: [
        { id: v4(), guess: "sound" }
    ],
    userInput: "as",
    guessLimit: 6
}

const wordleContext = createContext<{
    state: WordleState;
    dispatch: Dispatch<WordleAction>;
}>({
    state: initialState,
    dispatch: () => {
        // no op
    }
});

export const WordleProvider = ({ defaultState, children }: { defaultState?: WordleState, children: React.ReactNode }) => {
    const { state, dispatch } = useWordleReducer(defaultState ?? initialState);

    return <wordleContext.Provider value={{
        state,
        dispatch
    }}>{children}</wordleContext.Provider>
}

export const useWordleContext = () => {
    return useContext(wordleContext);
}