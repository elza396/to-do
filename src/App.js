import React, {useEffect, useRef, useState} from 'react';
import './App.css';


export function App() {
  const savedNotes = JSON.parse(localStorage.getItem("localNotes"));
  const [notes, setNotes] = useState(savedNotes || []);
  const inputRef = useRef();

  useEffect(() => {
    console.log('effect')
    localStorage.setItem("localNotes", JSON.stringify(notes));
  }, [notes])

  function onSubmit(event) {
    event.preventDefault();
    const value = inputRef.current.value.trim();
    if (value === '') return;

    const noteObj = {
      text: inputRef.current.value,
      checked: false,
      id: Date.now()
    }
    setNotes(notes.concat(noteObj));
    inputRef.current.value = '';
  }


  function deleteNote(id) {
    const notesClone = notes.slice(0);
    let indexItem = notesClone.findIndex(note => note.id === id);
    notesClone.splice(indexItem, 1);
    setNotes(notesClone);
  }

  function toBeChecked(id) {
    const notesClone = notes.slice(0);
    let indexItem = notesClone.findIndex(note => note.id === id);
    notesClone[indexItem].checked = !notes[indexItem].checked;
    setNotes(notesClone);
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
                  <input className="checkbox" type="checkbox" checked={note.checked} onClick={() => toBeChecked(note.id)}/>
                  <span className="span">{note.text}</span>
                  <img onClick={() => deleteNote(note.id)} className="icon_delete" src="https://cdn.pixabay.com/photo/2016/03/31/18/31/cancel-1294426_640.png" alt=''/>
            </div>
          ))
        }
      </div>
    </div>
  )
}



