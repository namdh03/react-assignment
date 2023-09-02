import * as CONSTANTS from "./constants";

export const initState = {
    job: "",
    jobs: JSON.parse(localStorage.getItem("jobs")) ?? [],
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
            newJobs.splice(action.payload.index, 1, action.payload.job);
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
