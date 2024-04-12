import Item from './Item'

function List({tasks}) {
    return (
        <ul>
            {/* {todo.map((taskTodo, index) => (
                <Item 
                key={`${taskTodo}-${index}`}
                taskTodo={taskTodo} 
                setDone={setDone} 
                todo={todo} 
                done={done}/>
            ))} */}
            {tasks.map((task, index) => (
                <Item 
                key={`${task}-${index}`}
                task={task}/>
            ))}
        </ul>
    )
}

export default List