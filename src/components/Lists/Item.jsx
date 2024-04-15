import { useState, useEffect } from "react";

function Item({ task, tasks, setTasks}) {
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
        </>
    )
}

export default Item