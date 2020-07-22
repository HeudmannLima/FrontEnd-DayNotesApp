import React from 'react';

import './styles.css';
import { AiTwotoneDelete, AiOutlineExclamation, AiTwotoneEdit } from 'react-icons/ai';

function Notes({ data, handleChangePriority, handleDelete }) {

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

      <textarea disabled value={data.notes} />
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
