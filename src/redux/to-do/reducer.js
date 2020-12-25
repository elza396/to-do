import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from "./action-types";

const initialState = {
    all: JSON.parse(localStorage.getItem("localNotes")) || [],
}
function saveLocal(notes) {
    localStorage.setItem("localNotes", JSON.stringify(notes));
}

export function toDo(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE: {
            const newState = {all: state.all.slice(0)};
            newState.all.push(action.payload);
            saveLocal(newState.all);
            return newState;
        }
        case DELETE_NOTE: {
            const newState = {all: state.all.slice(0)};
            const index = newState.all.findIndex(note => note.id === action.payload);
            newState.all.splice(index, 1);
            saveLocal(newState.all);
            return newState;
        }
        case UPDATE_NOTE: {
            const newState = {all: state.all.slice(0)};
            const index = newState.all.findIndex(note => note.id === action.payload.id);
            newState.all[index] = action.payload;
            saveLocal(newState.all);
            return newState;
        }
        default:
            return state;
    }
}