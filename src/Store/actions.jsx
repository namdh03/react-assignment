import * as CONSTANTS from "./constants";

const setJob = (payload) => {
    return {
        type: CONSTANTS.SET_JOB,
        payload,
    };
};

const addJob = (payload) => {
    return {
        type: CONSTANTS.ADD_JOB,
        payload,
    };
};

const removeJob = (payload) => {
    return {
        type: CONSTANTS.REMOVE_JOB,
        payload,
    };
};

const updateJob = (payload) => {
    return {
        type: CONSTANTS.UPDATE_JOB,
        payload,
    };
};

const setEdit = (payload) => {
    return {
        type: CONSTANTS.IS_EDIT,
        payload,
    };
};

export { setJob, addJob, removeJob, updateJob, setEdit };
