import { useEffect } from "react";
import { useHackerNewsJobs } from "./state";
import { JobPosting } from "./job-posting";

export const HackerNewsJobs = () => {
    const { state, dispatch } = useHackerNewsJobs();

    const fetchJobIds = async () => {
        const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
        const data = await response.json();
        dispatch({ type: "UPDATE_JOB_IDS", payload: data });
    }

    useEffect(() => {
        fetchJobIds();
    }, []);

    return <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Hacker News Jobs</h1>
        <div className="flex flex-col gap-4">
            {state.loadingJobIds && <div>Loading....</div>}
            {state.jobsIdsDisplayed.map((jobId) => (
                <JobPosting key={jobId} jobId={jobId} />
            ))}

            {state.jobsIdsDisplayed.length < state.jobIds.length && <button onClick={() => dispatch({ type: "LOAD_NEXT_PAGE" })}>Load more</button>}
        </div>
    </div>
}
