import { useWordleContext, WordleGuess } from "./state";

type LetterStatus = "CORRECT" | "INCORRECT" | "MISPLACED" | "NONE";

export const GuessesGrid = () => {
    const { state } = useWordleContext();
    return <div className="flex flex-col gap-2">
        {state.guesses.map((guess) => <GuessRow key={guess.id} guess={guess} />)}
        {state.guesses.length < state.guessLimit && <UserInputRow />}
        {Array.from({ length: state.guessLimit - state.guesses.length - 1 }).map((_, i) => <BlankRow key={i} length={state.word.length} />)}
    </div>
}

const GuessRow = ({ guess }: { guess: WordleGuess }) => {
    const { state } = useWordleContext();

    const getStatus = ({
        letter,
        index
    }: {
        letter: string;
        index: number;
    }) => {
        if (letter === state.word[index]) {
            return "CORRECT";
        }

        if (state.word.includes(letter)) {
            return "MISPLACED";
        }

        return "INCORRECT";
    }

    return <Row>
        {guess.guess.split("").map((letter, i) => <Square key={i} letter={letter} status={getStatus({ letter, index: i })} />)}
    </Row>
}

const BlankRow = ({ length }: { length: number }) => {
    return <Row>{Array.from({ length }).map((_, i) => <Square key={i} letter="" status="NONE" />)}</Row>
}

const UserInputRow = () => {
    const { state } = useWordleContext();
    const remainingLength = state.word.length - state.userInput.length;
    return <Row>
        {state.userInput.split("").map((letter, i) => <Square key={i} letter={letter} status={"NONE"} />)}
        {Array.from({ length: remainingLength }).map((_, i) => <Square key={i} letter="" status="NONE" />)}
    </Row>
}

const Row = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex gap-2">{children}</div>
}

const Square = ({ letter, status }: { letter: string; status: LetterStatus }) => {
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

    return <div className={`w-10 flex justify-center items-center font-bold text-xl h-10 rounded-md`} style={{ backgroundColor: getBackgroundColor(status) }}>{letter}</div>
}
