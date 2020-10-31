import React, {useState, useEffect} from 'react'
import {firebase} from './firebase'

function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState('')

  useEffect(() => {

    const obtenerDatos = async () => {

      try {

        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        console.log(arrayData)
        setTareas(arrayData)

      } catch (error) {
        console.log(error);
      }
    }

    obtenerDatos()

  }, [])

  const agregar = async (e) => {
    e.preventDefault()

    if(!tarea.trim()){
      console.log('Está vacio');
      return
    }

    try {

      const db = firebase.firestore()
      const nuevaTarea = {
        name: tarea,
        fecha: Date.now()
      }
      const data = await db.collection('tareas').add(nuevaTarea)

      setTareas([
        ...tareas,
        {...nuevaTarea, id: data.id}
      ])

      setTarea('')

    } catch (error) {

      console.log(error);
    }

    console.log(tarea);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              tareas.map(tarea => (
                <li className="list-group-item" key={tarea.id}>{tarea.name} - {tarea.fecha}</li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <form onSubmit={agregar}>
            <input
              type="text"
              placeholder="Ingrese Tarea"
              className="form-control mb-2"
              value={tarea}
              onChange={e => setTarea(e.target.value)}
            />
            <button
              className="btn btn-dark btn-block"
              type="submit"
            >
                Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
