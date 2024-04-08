function Form({ setInputValue, inputValue, todo, setTodo }) {

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue !== '') {
            setTodo([...todo, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form>
            <label htmlFor="newTaskInput">Rentrez vos tâches à effectuées:</label>
            <div className="inputContainer">
                <input type="text" value={inputValue} id="newTaskInput" onChange={handleChange} placeholder="Rentrez votre tâche" />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >Ajouter</button>
            </div>
        </form>
    )
}

export default Form