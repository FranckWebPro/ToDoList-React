function List({tasks}) {
    return (
        <ul>
            {tasks.map((task) => {
                <Input value={task.value}/>
            })}
        </ul>
    )
}