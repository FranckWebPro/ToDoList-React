import { useState } from 'react'
import Form from './Form'
import List from './Lists/List'
import '../styles/App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <header>
        <h1>React Todo-List</h1>
      </header>
      <main>
        <section className='inputSection'>
          <h2>Ajouter vos tâches à effectuées</h2>
          <Form setInputValue={setInputValue} inputValue={inputValue} setTodo={setTodo} todo={todo}/>
        </section>
        <section>
          <h3>À Faire</h3>
          <List setTodo={setTodo} todo={todo} setDone={setDone} done={done}/>
        </section>
      </main>
      <footer>
        <p>Made by FranckWebPro</p>
      </footer>
    </>
  )
}

export default App
