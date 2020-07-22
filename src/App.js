import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import Notes from './components/Notes'

function App() {
  const [ allNotes, setAllNotes ] = useState([]);
  const [ title, setTitle ] = useState('');
  const [ notes, setNotes ] = useState('');
  const [ prioritize, setPrioritize ] = useState('');

  useEffect(() => {
    loadAllNotes();
  }, [prioritize])

  async function loadAllNotes() {
    const response = await api.get('/annotations');
    setAllNotes(response.data)
  }

  async function handleChangePriority(id) {
    const changePriority = await api.post(`/priorities/${id}`);
    setPrioritize(changePriority);
  }

  async function handleDelete(id) {
    const deleteNote = await api.delete(`/annotations/${id}`)
    if(deleteNote) {
      loadAllNotes();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false,
    })

    setTitle('');
    setNotes('');
    setAllNotes([...allNotes, response.data]);
  }

  return (
    <div id="app">

      <aside>
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
      </aside>

      <main>
        <ul>
          {allNotes.map(data => (
            <Notes
              key={data._id}
              data={data}
              handleChangePriority={handleChangePriority}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;

