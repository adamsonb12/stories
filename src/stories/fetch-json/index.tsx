import { useEffect, useState } from "react";

interface Character {
    name: string;
    species: string;
}

const wait = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const FetchJson = () => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await wait(1000);
            const response = await fetch("/data.json");
            const data = await response.json();
            setData(data.characters);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    return <div>{data.map(character => <div key={character.name}>{character.name}</div>)}</div>
}