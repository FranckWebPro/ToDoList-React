import PropTypes from "prop-types";
import Item from './Item'

function List({tasks, setTasks}) {

    return (
        <ul>
            {tasks.map((task, index) => (
                <Item
                    key={`${task.task}-${index}`}
                    index={index}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
        </ul>
    )
}

export default List

List.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    })).isRequired,
    setTasks: PropTypes.func.isRequired
  }