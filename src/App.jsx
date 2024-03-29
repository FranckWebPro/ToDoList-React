import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [task, setTask] = useState(0)
  const tasks = [];

  const addTask = () => {
    setTask(task);
    const newTaskObject = {};
    newTaskObject.value = task;
    newTaskObject.done = false;
    tasks.push(newTaskObject);
  }

  return (
    <>
      <header>
        <h1>React Todo-List</h1>
      </header>
      <main>
        <section className='inputSection'>
          <h2>Ajouter vos tâches à effectuées</h2>
          <Form onSubmit={setTask} task={task}/>
        </section>
        <section>

        </section>
        <section>

        </section>
      </main>
      <footer>
        <p>Made by FranckWebPro</p>
      </footer>
    </>
  )
}

export default App
