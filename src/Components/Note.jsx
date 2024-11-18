import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
function Note(props) {

    const deleteNote =()=>{
        props.deleteItem(props.id);
    }
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className='note-del-btn' onClick={deleteNote}>
            <DeleteIcon className='deleteIcon'/>
        </button>
      </div>
    </>
  )
}

export default Note
