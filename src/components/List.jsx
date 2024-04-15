import PropTypes from "prop-types";
import Item from './Item'

function List({tasks, setTasks}) {
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
                    key={`${task.task}-${index}`}
                    index={index}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}/>
            ))}
        </ul>
    )
}

export default List

List.propTypes = {
    tasks: PropTypes.arrayOf({
      task: PropTypes.string,
    }),
    setTasks : PropTypes.shape
  }