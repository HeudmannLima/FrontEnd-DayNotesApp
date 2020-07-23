import React, { useState } from 'react';

import './styles.css';
import { AiTwotoneDelete, AiOutlineExclamation, AiTwotoneEdit } from 'react-icons/ai';
import api from '../../services/api';

function Notes({ data, handleChangePriority, handleDelete }) {
  const [ newNote, setNewNote ] = useState('');

  function handleEdit(el, priority) {
    el.style.cursor = 'text';
    el.style.borderRadius = '5px';

    if (priority) {
      el.style.boxShadow = '0 0 5px white';      
    } else {
      el.style.boxShadow = '0 0 5px gray';
    }
  }

  async function handleSave(el, notes) {
    el.style.cursor = 'default';
    el.style.boxShadow = 'none';

    if (newNote && newNote !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: newNote
      });
    }
  }

  return (
    <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>

      <div>
        <strong>{data.title}</strong>
        <div>
          <AiTwotoneDelete
            onClick={() => handleDelete(data._id)}
            size="20"
            cursor="pointer"
          />
        </div> 
      </div>

      <textarea
        defaultValue={data.notes}
        onChange={e => setNewNote(e.target.value)}
        onClick={el => handleEdit(el.target, data.priority)}
        onBlur={el => handleSave(el.target, data.notes)}
      />
      <p>
        <AiOutlineExclamation
          onClick={() => handleChangePriority(data._id)}
          size="20"
          cursor= "pointer"
        />
        <AiTwotoneEdit 
          className="buttonEdit"
          cursor= "pointer"
        />
      </p>

    </li>
  )
}

export default Notes;
