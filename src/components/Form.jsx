import { useState } from "react";

function Form({ setTasks, tasks }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if (inputValue !== '') {
            localStorage.setItem('tasks', JSON.stringify([...tasks, inputValue]));
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form>
            <label htmlFor="newTaskInput">Rentrez vos tâches à effectuées:</label>
            <div className="inputContainer">
                <input type="text" id="newTaskInput" placeholder="Rentrez votre tâche" />
                <button
                    type="submit"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    onSubmit={event => handleSubmit(event)}
                >Ajouter</button>
            </div>
        </form>
    )
}

export default Form