import { useState } from 'react'
import Form from './Form'
import List from './List'
import '../styles/App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
  });


  return (
    <>
      <header>
        <h1>React Todo-List</h1>
      </header>
      <main>
        <section className='inputSection'>
          <h2>Ajouter vos tâches à effectuées</h2>
          <Form setTasks={setTasks} tasks={tasks}/>
        </section>
        <section>
          <h3>À Faire</h3>
          <List tasks={tasks} setTasks={setTasks}/>
        </section>
      </main>
      <footer>
        <p>Made by FranckWebPro</p>
      </footer>
    </>
  )
}

export default App
