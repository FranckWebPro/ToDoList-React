import { useState } from 'react'
import Form from './Form'
import List from './Lists/List'
import '../styles/App.css'

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
        <section className="inputContainer">
          <h3>À Faire</h3>
          <List tasks={tasks}/>
        </section>
        <section>
          <h3>Fait</h3>
          <List tasks={tasks}/>
        </section>
      </main>
      <footer>
        <p>Made by FranckWebPro</p>
      </footer>
    </>
  )
}

export default App
