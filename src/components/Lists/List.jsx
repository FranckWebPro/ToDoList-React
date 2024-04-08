import Item from './Item'

function List({tasks}) {
    return (
        <ul>
            {tasks.map((task) => {
                <Item value={task.value}/>
            })}
        </ul>
    )
}

export default List