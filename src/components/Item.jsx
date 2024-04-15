import { useState } from "react";
import PropTypes from "prop-types";

function Item({ task, tasks, setTasks}) {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(task.done);
    const todo = [...tasks];
    const reducedTodo = todo.filter(currentTask => currentTask.task !== task.task);

    const handleCheckboxChange = () => {
        if (checked) {
            const updatedTodo = [{ task: task.task, done: false }, ...reducedTodo];
            localStorage.setItem('tasks', JSON.stringify(updatedTodo));
            setTasks(updatedTodo);
        } else {
            const updatedTodo = [...reducedTodo, { task: task.task, done: true}];
            localStorage.setItem('tasks', JSON.stringify(updatedTodo));
            setTasks(updatedTodo);
        }
        setChecked(!checked);
    };

    const handleDelete = () => {
        localStorage.setItem('tasks', JSON.stringify(reducedTodo));
        setTasks(reducedTodo);
    };

    const handleEdit = () => {
        localStorage.setItem('tasks', JSON.stringify(reducedTodo));
        setTasks(reducedTodo);
    };

    return (
        <>
            <li className={checked ? "crossedLine" : ""}>
                <input
                    type="checkbox"
                    checked={checked ? true : false}
                    onChange={handleCheckboxChange}
                    className="taskCheckBox"
                /> {task.task}
                <div className="iconContainer">
                    <img src="src/assets/trash.png" alt="" className="trashContainer" onClick={handleDelete} />
                    <img src="src/assets/editer.png" alt="" className="editContainer" onClick={handleEdit}/>
                </div>
            </li>
            <form onSubmit={handleEdit} className="editPopup">
            <label htmlFor="newTaskInput">Modifier la tâche:</label>
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
        </>
    )
}

export default Item

Item.propTypes = {
    tasks: PropTypes.shape({
      task: PropTypes.string,
    }),
    task: PropTypes.string,
    setTasks : PropTypes.shape.isRequired,
    index: PropTypes.number.isRequired
  }