function Form({onSubmit, task}) {
    return (
    <form>
        <input type="text" value={task} placeholder="Rentrez votre tâche"/>
        <button type="submit" 
        onSubmit={(event) => {
            event.preventDefault
            onSubmit(task)
            }}>Ajouter</button>
    </form>
    )
}

export default Form