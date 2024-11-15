import { useReducer } from "react";

interface HackerNewsJobsState {
    jobIds: string[];
    jobsIdsDisplayed: string[];
    loadingJobIds: boolean;
}

// ACTIONS
interface UpdateJobIds {
    type: "UPDATE_JOB_IDS";
    payload: string[];
}

interface LoadNextPage {
    type: "LOAD_NEXT_PAGE";
}

interface UpdateLoadingJobIds {
    type: "UPDATE_LOADING_JOB_IDS";
    payload: boolean;
}

type HackerNewsJobsAction = UpdateJobIds | LoadNextPage | UpdateLoadingJobIds;

const PAGE_SIZE = 6;

const HackerNewsJobsReducer = (prevState: HackerNewsJobsState, action: HackerNewsJobsAction): HackerNewsJobsState => {
    switch (action.type) {
        case "UPDATE_JOB_IDS":
            return { ...prevState, jobIds: action.payload, loadingJobIds: false, jobsIdsDisplayed: action.payload.slice(0, action.payload.length < PAGE_SIZE ? action.payload.length : PAGE_SIZE) };
        case "LOAD_NEXT_PAGE":
            if (prevState.jobIds.length === prevState.jobsIdsDisplayed.length) {
                return prevState;
            }

            const nextPage = prevState.jobIds.slice(prevState.jobsIdsDisplayed.length, prevState.jobsIdsDisplayed.length + PAGE_SIZE);
            return { ...prevState, jobsIdsDisplayed: [...prevState.jobsIdsDisplayed, ...nextPage] };
        case "UPDATE_LOADING_JOB_IDS":
            return { ...prevState, loadingJobIds: action.payload };
        default:
            return prevState;
    }
}

const initialState: HackerNewsJobsState = {
    jobIds: [],
    jobsIdsDisplayed: [],
    loadingJobIds: true,
}

export const useHackerNewsJobs = (defaultState?: HackerNewsJobsState) => {
    const [state, dispatch] = useReducer(HackerNewsJobsReducer, defaultState ?? initialState);
    return { state, dispatch };
}
