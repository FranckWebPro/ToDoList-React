import PropTypes from "prop-types";
import { useState } from "react";

function Popup( task, setTasks, setModal, reducedTodo) {
    const [editValue, setEditValue] = useState(task.task);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTodo = [{ task: editValue, done: task.done }, ...reducedTodo];
        localStorage.setItem('tasks', JSON.stringify(updatedTodo));
        setTasks(updatedTodo);
    }

    return (
        <div className="popupContainer">
            <form onSubmit={handleSubmit} className="popupBody">
                <label htmlFor="editInput">Modifier la tâche:</label>
                <div className="editContainer">
                    <input 
                    type="text" 
                    id="editInput" 
                    placeholder="Rentrez votre tâche"
                    value={editValue} 
                    onChange={event => setEditValue(event.target.value)} />
                    <button type="button" onClick={() => setModal(false)}>Annuler</button>
                    <button
                        type="submit"
                    >Ajouter</button>
                </div>
            </form>
        </div>
    )
}

export default Popup;

  Popup.propTypes = {
    task: PropTypes.shape({
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired,
    setTasks: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired,
    reducedTodo: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    })).isRequired
};