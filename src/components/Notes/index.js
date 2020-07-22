import React from 'react';

import './styles.css';
import { AiFillCloseCircle, AiFillExclamationCircle } from 'react-icons/ai';

function Notes({ data, handleChangePriority, handleDelete }) {

  return (
    <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>

      <div>
        <strong>{data.title}</strong>
        <div>
          <AiFillCloseCircle
            onClick={() => handleDelete(data._id)}
            size="20"
            cursor="pointer"
          />
        </div> 
      </div>

      <textarea disabled value={data.notes} />
      <p>
        <AiFillExclamationCircle
          onClick={() => handleChangePriority(data._id)}
          size="20"
        />
      </p>

    </li>
  )
}

export default Notes;
