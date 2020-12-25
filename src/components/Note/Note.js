import React from 'react';
import './Note.css';



export function Note(props) {
    return (
        <div className="note">
            <input className="checkbox" type="checkbox"></input>
            <span className="span"></span>
            <img className="icon_delete" src="https://cdn.pixabay.com/photo/2016/03/31/18/31/cancel-1294426_640.png"/>
        </div>
    )
}