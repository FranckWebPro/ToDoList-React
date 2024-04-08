function Item({ taskDone, taskTodo }) {
    return (
        <>
        <li>
            <input
                type="checkbox"
                className="taskCheckBox" 
            /> {taskDone ? taskDone : taskTodo} <img src="src/assets/trash.png" alt="" className="trashContainer" />
        </li>
        </>
    )
}

export default Item