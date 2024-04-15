import { useState } from "react";

function Form({ setTasks, tasks }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if (inputValue !== '') {
            localStorage.setItem('tasks', JSON.stringify([{task : inputValue, done : false}, ...tasks]));
            setTasks([{task : inputValue, done : false}, ...tasks]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTaskInput">Rentrez vos tâches à effectuées:</label>
            <div className="inputContainer">
                <input 
                type="text" 
                id="newTaskInput" 
                placeholder="Rentrez votre tâche"
                value={inputValue} 
                onChange={event => setInputValue(event.target.value)} />
                <button
                    type="submit"
                >Ajouter</button>
            </div>
        </form>
    )
}

export default Form