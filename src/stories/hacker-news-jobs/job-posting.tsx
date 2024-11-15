import { useEffect, useState } from "react";

interface Job {
    id: string;
    by: string;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export const JobPosting = ({ jobId }: { jobId: string }) => {
    const [job, setJob] = useState<Job | null>(null);

    const fetchJob = async () => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
        const data = await response.json();
        setJob(data);
    }

    useEffect(() => {
        fetchJob();
    }, [jobId]);

    if (job) {
        const date = new Date(job.time * 1000);
        // For some reason, the padding and background color are not applied when using className
        return <div className="border border-gray-200 rounded-md" style={{ padding: "16px", backgroundColor: "#fff" }}>
            <a href={job.url} target="_blank" rel="noreferrer" className="text-lg font-bold">{job.title}</a>
            <div className="flex flex-row w-full" style={{ justifyContent: "space-between" }}>
                <p className="text-sm text-black">{job.by}</p>
                <p className="text-sm text-black">{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</p>
            </div>
        </div>
    }

    return <div>Loading...</div>
}
