import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addNote, deleteNote, updateNote} from "./redux/to-do/actions";


export function App() {
  const inputRef = useRef();

  const notes = useSelector((state) => state.toDo.all);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('effect')
  //   localStorage.setItem("localNotes", JSON.stringify(notes));
  // }, [notes])

  function onSubmit(event) {
    event.preventDefault();
    const value = inputRef.current.value.trim();
    if (value === '') return;

    const noteObj = {
      text: inputRef.current.value,
      checked: false,
      id: Date.now()
    }

    dispatch(addNote(noteObj));
    inputRef.current.value = '';
  }

  return (
    <div>
      <h1 className="title">To Do List</h1>
      <form onSubmit={onSubmit} className="form">
        <input ref={inputRef} className="input"/>
        <img onClick={onSubmit} className="icon_plus" src="https://www.clipartmax.com/png/full/23-230185_clipart-primary-add-plus-sign.png" alt=''/>
      </form>
      <div className="notes">
        {notes.map(note => (
            <div className="note" key={note.id}>
                  <input className="checkbox"
                         type="checkbox"
                         checked={note.checked}
                         onClick={() => {dispatch(updateNote({...note, checked: !note.checked}))}}/>
                  <span className="span">{note.text}</span>
                  <img onClick={() => dispatch(deleteNote(note.id))} className="icon_delete" src="https://cdn.pixabay.com/photo/2016/03/31/18/31/cancel-1294426_640.png" alt=''/>
            </div>
          ))
        }
      </div>
    </div>
  )
}



