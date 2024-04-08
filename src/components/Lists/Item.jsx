function Item({value}) {
    return(
        <li><input type="checkbox" className="taskCheckBox" /> {value} <img src="src/assets/trash.png" alt="" className="trashContainer" /></li>
    )
}

export default Item