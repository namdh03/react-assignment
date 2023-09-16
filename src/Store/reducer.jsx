import * as CONSTANTS from "./constants";

const getJobs = () => {
    try {
        const item = window.localStorage.getItem("jobs");
        return item ? JSON.parse(item) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const initState = {
    job: "",
    jobs: getJobs(),
    isEdit: {
        index: -1,
        status: false,
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.SET_JOB: {
            return {
                ...state,
                job: action.payload,
            };
        }

        case CONSTANTS.ADD_JOB: {
            const newState = {
                ...state,
                jobs: [...state.jobs, action.payload.trim()],
            };

            localStorage.setItem("jobs", JSON.stringify(newState.jobs));

            return newState;
        }

        case CONSTANTS.REMOVE_JOB: {
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            localStorage.setItem("jobs", JSON.stringify(newJobs));

            return {
                ...state,
                jobs: newJobs,
            };
        }

        case CONSTANTS.UPDATE_JOB: {
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload.index, 1, action.payload.job.trim());
            localStorage.setItem("jobs", JSON.stringify(newJobs));

            return {
                ...state,
                jobs: newJobs,
            };
        }

        case CONSTANTS.IS_EDIT: {
            return {
                ...state,
                isEdit: {
                    ...state.isEdit,
                    index: action.payload.index,
                    status: action.payload.status,
                },
            };
        }

        default:
            break;
    }
};

export default reducer;
