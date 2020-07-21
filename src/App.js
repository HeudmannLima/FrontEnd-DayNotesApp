import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import Annotations from './components/Annotations'

function App() {
  const [ annotations, setAnnotations ] = useState([]);

  const [ annotation_title, setAnnotationTitle ] = useState('');
  const [ annotation, setAnnotation ] = useState('');

  useEffect(() => {
    async function loadAnnotations() {
      const response = await api.get('/');

      setAnnotations(response.data)
    }

    loadAnnotations();
  }, [])

  function handleSelectPriority() {
    document.querySelector('li').classList.toggle('notepad-infos-priority')
  } 

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/', {
      annotation_title,
      annotation
    })

    setAnnotationTitle('');
    setAnnotation('');

    setAnnotations([...annotations, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit} >
          <div className="input-block">
            <label htmlFor="annotation_title">Titulo da Anotação</label>
            <input
              name="annotation_title"
              id="annotation_title"
              value={annotation_title}
              onChange={e => setAnnotationTitle(e.target.value)}
              required />
          </div>

          <div className="input-block">
            <label htmlFor="annotation">Anotação</label>
            <textarea
              name="annotation"
              id="annotation"
              value={annotation}
              onChange={e => setAnnotation(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" >Salvar</button>  
        </form>
      </aside>
      <main>
        <ul>
          {annotations.map(annotation => (
           <Annotations key={annotation.id} annotation={annotation} />
          ))}
          

          <li className= "notepad-infos" >
            <div>
              <strong>Fazer Compras</strong>
              <div>
               <AiFillCloseCircle size="20" cursor="pointer" />
              </div> 
            </div>
            <textarea disabled defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." name="anotattion" id="anotattion" cols="num" rows="num"></textarea>
            <p>
              <AiFillExclamationCircle
                  onClick={handleSelectPriority}
                  size="20"
              />
            </p>
          </li>

          
        </ul>
      </main>
    </div>
  );
}

export default App;
