import Item from './Item'

function List({todo, setTodo, done, setDone}) {
    return (
        <ul>
            {todo.map((taskTodo) => (
                <Item taskTodo={taskTodo}/>
            ))}
            {done.map((taskDone) => (
                <Item taskDone={taskDone}/>
            ))}
        </ul>
    )
}

export default List