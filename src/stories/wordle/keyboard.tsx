import { useWordleContext } from "./state";

type LetterStatus = "CORRECT" | "INCORRECT" | "MISPLACED" | "NONE";

export const Keyboard = () => {
    const { state, dispatch } = useWordleContext();

    const getStatus = ({
        letter,
    }: {
        letter: string;
    }) => {
        if (state.guesses.some((guess) => guess.guess.includes(letter))) {
            if (state.word.includes(letter)) {
                return "MISPLACED";
            }

            return "INCORRECT";
        }

        return "NONE";
    }

    const handleKeyClick = ({ letter }: { letter: string }) => {
        if (state.userInput.length < state.word.length) {
            dispatch({ type: "UPDATE_USER_INPUT", payload: `${state.userInput}${letter}` });
        }
    }

    return <div className="flex flex-col gap-2 items-center">
        <Row>
            {keys.row1.map((letter) => <Key key={letter} letter={letter} status={getStatus({ letter })} onClick={() => {
                handleKeyClick({ letter })
            }} />)}
        </Row>
        <Row>
            {keys.row2.map((letter) => <Key key={letter} letter={letter} status={getStatus({ letter })} onClick={() => {
                handleKeyClick({ letter })
            }} />)}
        </Row>
        <Row>
            <Key letter="ENTER" status="NONE" onClick={() => {
                if (state.userInput.length === state.word.length) {
                    dispatch({ type: "SUBMIT_GUESS" });
                }
            }} />
            {keys.row3.map((letter) => <Key key={letter} letter={letter} status={getStatus({ letter })} onClick={() => {
                handleKeyClick({ letter })
            }} />)}
            <Key letter="DELETE" status="NONE" onClick={() => {
                if (state.userInput.length > 0) {
                    dispatch({ type: "UPDATE_USER_INPUT", payload: state.userInput.slice(0, -1) });
                }
            }} />
        </Row>
    </div>
}

const Row = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex gap-2">{children}</div>
}

const Key = ({ letter, status, onClick }: { letter: string; status: LetterStatus, onClick: () => void }) => {
    const getBackgroundColor = (status: LetterStatus) => {
        if (status === "CORRECT") {
            return "#538d4e";
        }

        if (status === "INCORRECT") {
            return "red";
        }

        if (status === "MISPLACED") {
            return "#c9b458";
        }

        return "gray";
    }

    return <button className={`w-auto flex justify-center items-center font-bold text-xl h-10 rounded-md`} style={{ backgroundColor: getBackgroundColor(status) }} onClick={onClick}>{letter}</button>
}

const keys = {
    row1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    row2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    row3: ["z", "x", "c", "v", "b", "n", "m"]
}