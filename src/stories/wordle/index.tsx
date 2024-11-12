import { useEffect, useState } from "react";
import { GuessesGrid } from "./guesses-grid";
import { initialState, WordleProvider } from "./state";

export const Wordle = () => {
    const [loading, setLoading] = useState(true);
    const [word, setWord] = useState<string | null>(null);
    const fetchWord = async () => {
        const word = await fakeApiRequest;
        console.log("🚀 ~ Wordle ~ word:", word)
        setWord(word);
        setLoading(false);
    }

    useEffect(() => {
        fetchWord();
    }, []);

    if (loading || !word) {
        return <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
    }

    return <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">WORDLE</h1>
        <WordleProvider defaultState={{ ...initialState, word }}>
            <WordleGame />
        </WordleProvider>
    </div>
}

const WordleGame = () => {
    return (
        <div className="flex flex-col gap-4">
            <GuessesGrid />
            {/* <Keyboard /> */}
        </div>
    )
}

const fakeApiRequest: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(wordBank[Math.floor(Math.random() * wordBank.length)]);
    }, 2000);
});


const wordBank = [
    "about", "above", "abuse", "actor", "acute", "admit", "adopt", "adult", "after", "again",
    "agent", "agree", "ahead", "alarm", "album", "alert", "alike", "alive", "allow", "alone",
    "along", "alter", "among", "anger", "angle", "angry", "apart", "apple", "apply", "arena",
    "argue", "arise", "array", "aside", "asset", "audio", "audit", "avoid", "award", "aware",
    "badly", "baker", "bases", "basic", "basis", "beach", "began", "begin", "begun", "being",
    "below", "bench", "billy", "birth", "black", "blame", "blind", "block", "blood", "board",
    "boost", "booth", "bound", "brain", "brand", "bread", "break", "breed", "brief", "bring",
    "broad", "broke", "brown", "build", "built", "buyer", "cable", "calif", "carry", "catch",
    "cause", "chain", "chair", "chart", "chase", "cheap", "check", "chest", "chief", "child",
    "china", "chose", "civil", "claim", "class", "clean", "clear", "click", "clock", "close",
    "coach", "coast", "could", "count", "court", "cover", "craft", "crash", "cream", "crime",
    "cross", "crowd", "crown", "curve", "cycle", "daily", "dance", "dated", "dealt", "death",
    "debut", "delay", "depth", "doing", "doubt", "dozen", "draft", "drama", "drawn", "dream",
    "dress", "drill", "drink", "drive", "drove", "dying", "eager", "early", "earth", "eight",
    "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "event", "every",
    "exact", "exist", "extra", "faith", "false", "fault", "fiber", "field", "fifth", "fifty",
    "fight", "final", "first", "fixed", "flash", "fleet", "floor", "fluid", "focus", "force",
    "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "front", "fruit",
    "fully", "funny", "giant", "given", "glass", "globe", "going", "grace", "grade", "grand",
    "grant", "grass", "great", "green", "gross", "group", "grown", "guard", "guess", "guest",
    "guide", "happy", "harry", "heart", "heavy", "hence", "henry", "horse", "hotel", "house",
    "human", "ideal", "image", "index", "inner", "input", "issue", "japan", "jimmy", "joint",
    "jones", "judge", "known", "label", "large", "laser", "later", "laugh", "layer", "learn",
    "lease", "least", "leave", "legal", "level", "lewis", "light", "limit", "links", "lives",
    "local", "logic", "loose", "lower", "lucky", "lunch", "lying", "magic", "major", "maker",
    "march", "maria", "match", "maybe", "mayor", "meant", "media", "metal", "might", "minor",
    "minus", "mixed", "model", "money", "month", "moral", "motor", "mount", "mouse", "mouth",
    "movie", "music", "needs", "never", "newly", "night", "noise", "north", "noted", "novel",
    "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", "paint", "panel",
    "paper", "party", "peace", "peter", "phase", "phone", "photo", "piece", "pilot", "pitch",
    "place", "plain", "plane", "plant", "plate", "point", "pound", "power", "press", "price",
    "pride", "prime", "print", "prior", "prize", "proof", "proud", "prove", "queen", "quick",
    "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", "reach", "ready", "realm",
    "rebel", "refer", "right", "rival", "river", "robin", "roger", "roman", "rough", "round",
    "route", "royal", "rural", "scale", "scene", "scope", "score", "sense", "serve", "seven",
    "shall", "shape", "share", "sharp", "sheet", "shelf", "shell", "shift", "shirt", "shock",
    "shoot", "short", "shown", "sight", "since", "sixth", "sixty", "sized", "skill", "sleep",
    "slide", "small", "smart", "smile", "smith", "smoke", "solid", "solve", "sorry", "sound",
    "south", "space", "spare", "speak", "speed", "spend", "spent", "split", "spoke", "sport",
    "staff", "stage", "stake", "stand", "start", "state", "steam", "steel", "stick", "still",
    "stock", "stone", "stood", "store", "storm", "story", "strip", "stuck", "study", "stuff",
    "style", "sugar", "suite", "super", "sweet", "table", "taken", "taste", "taxes", "teach",
    "teeth", "terry", "texas", "thank", "theft", "their", "theme", "there", "these", "thick",
    "thing", "think", "third", "those", "three", "threw", "throw", "tight", "times", "tired",
    "title", "today", "topic", "total", "touch", "tough", "tower", "track", "trade", "train",
    "treat", "trend", "trial", "tried", "tries", "truck", "truly", "trust", "truth", "twice",
    "under", "undue", "union", "unity", "until", "upper", "upset", "urban", "usage", "usual",
    "valid", "value", "video", "virus", "visit", "vital", "voice", "waste", "watch", "water",
    "wheel", "where", "which", "while", "white", "whole", "whose", "woman", "women", "world",
    "worry", "worse", "worst", "worth", "would", "wound", "write", "wrong", "wrote", "yield",
    "young", "youth", "store", "smile", "blaze", "beach", "chant", "dwell", "stare", "flock",
    "ember", "grind", "flick", "trace", "spark", "slant", "shrug", "blink", "crisp", "glide",
    "swoop", "pluck", "drift", "crawl", "frost", "grace", "slick", "gleam", "surge", "spill",
    "swell", "sneak", "flare", "scowl", "grasp", "whirl", "brush", "shine", "prowl", "kneel",
    "clasp", "bloom", "spray", "float", "cling", "stalk", "stomp", "prick", "climb", "blend",
    "stash", "flail", "skate", "thump", "growl", "swing", "scare", "creep", "glare", "shove",
    "fetch", "gazes", "groan", "sniff", "pause", "click", "hatch", "shake", "dodge", "sweep",
    "flick", "creak", "stain", "crush", "hoist", "phase", "wince", "tramp", "spurt", "smirk",
    "drape", "march", "stamp", "stray", "graze", "fling", "bring", "slash", "gripe", "weave",
    "snare", "drown", "forge", "strew", "snarl", "twist", "whine", "trace", "wreck", "choke",
    "flash", "crave", "spank", "smear", "scarf", "crash", "flare", "snoop", "scrap", "plead",
    "grasp", "spade", "brawl", "grind", "growl", "shred", "poise", "scald", "snipe", "wring",
    "scowl", "blast", "cramp", "quail", "braid", "twirl", "swipe", "lunge", "sling", "frisk",
    "grate", "blurt", "pulse", "flare", "pinch", "tweak", "swirl", "swish", "barge", "whisk",
    "blaze", "prick", "prance", "vault", "slump", "blurt", "trace", "glint", "shrug", "chide",
    "chirp", "crash", "swoop", "surge", "wince", "stalk", "stump", "flick", "spray", "prowl",
    "scoff", "sniff", "slink", "stash", "swell", "quake", "blink", "flair", "flick", "grunt",
    "spark", "smirk", "shove", "fetch", "fling", "squib", "stare", "grate", "blurt", "snare",
    "pinch", "flare", "scowl", "swish", "swipe", "whirl", "wince", "wrack", "wreck", "wring",
    "blaze", "blink", "brood", "chant", "clamp", "clasp", "crawl", "creak", "creep", "croak",
    "drape", "drawl", "dwell", "flail", "flair", "flare", "flash", "flick", "fling", "float",
    "flock", "forge", "frisk", "frost", "glare", "gleam", "glide", "graze", "grind", "gripe",
    "groan", "growl", "grunt", "hatch", "hoist", "kneel", "lunge", "pause", "pinch", "plead",
    "pluck", "poise", "prank", "prick", "prowl", "pulse", "quail", "quake", "scald", "scare",
    "scoff", "scowl", "scrap", "shove", "shred", "shrug", "skate", "slink", "slump", "smear",
    "smirk", "snare", "snarl", "sneak", "sniff", "snipe", "snoop", "spark", "spill", "spray",
    "spurt", "squib", "stain", "stalk", "stamp", "stare", "stash", "stomp", "stray", "strew",
    "surge", "swipe", "swirl", "swish", "swoop", "trace", "tramp", "tweak", "twirl", "twist",
    "vault", "weave", "whine", "whirl", "whisk", "wince", "wrack", "wreck", "wring", "write"
];
