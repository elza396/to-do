import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from "./action-types";

export const addNote = note => ({
    type: ADD_NOTE,
    payload: note,
});

export const deleteNote = id => ({
    type: DELETE_NOTE,
    payload: id,
})

export const updateNote = note => ({
    type: UPDATE_NOTE,
    payload: note,
})