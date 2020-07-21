import React from 'react';

import { AiFillCloseCircle, AiFillExclamationCircle } from 'react-icons/ai';

function Annotations(annotation) {
  return (
    <li className= "notepad-infos" >
      <div>
        <strong>{annotation.annotation_title}</strong>
        <div>
        <AiFillCloseCircle size="20" cursor="pointer" />
        </div> 
      </div>
      <textarea disabled >{annotation.annotation}</textarea>
      <p>
        <AiFillExclamationCircle
            onClick={handleSelectPriority}
            size="20"
        />
      </p>
    </li>
  )
}

export default Annotations;