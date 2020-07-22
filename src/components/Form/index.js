import React from 'react';

function Form({handleSubmit, setTitle, setNotes}) {
  return (
    <>
      <strong>Caderno de Notas</strong>
          <form onSubmit={handleSubmit} >
            <div className="input-block">
              <label htmlFor="title">Titulo da Anotação</label>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="note">Anotação</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                required
              />
            </div>

            <button type="submit" >Salvar</button>  
          </form>
        </>
  )
}

export default Form;