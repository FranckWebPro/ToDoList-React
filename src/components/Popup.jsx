import PropTypes from "prop-types";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Popup({task, setTasks, toggleModal, reducedTodo}) {
    const [editValue, setEditValue] = useState(task.task);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTodo = [{ task: editValue, done: task.done }, ...reducedTodo];
        localStorage.setItem('tasks', JSON.stringify(updatedTodo));
        setTasks(updatedTodo);
    }

    return ReactDOM.createPortal (
        <div className="popupContainer" onClick={toggleModal}>
            <form onSubmit={handleSubmit} className="popupBody" onClick={e => e.stopPropagation()}>
                <label htmlFor="editInput">Modifier la tâche:</label>
                <div className="editContainer">
                    <input 
                    type="text" 
                    id="editInput" 
                    placeholder="Rentrez votre tâche"
                    value={editValue} 
                    onChange={event => setEditValue(event.target.value)} />
                    <button type="button" onClick={toggleModal}>Annuler</button>
                    <button
                        type="submit"
                    >Ajouter</button>
                </div>
            </form>
        </div>,
        document.body
    );
}

export default Popup;

  Popup.propTypes = {
    task: PropTypes.shape({
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired,
    setTasks: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    reducedTodo: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    })).isRequired
};