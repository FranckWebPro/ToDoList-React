import { useState, useEffect } from "react";

function Item({ task }) {
   

    return (
        <>
            <li className={checked ? "crossedLine" : ""}>
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={handleCheckboxChange}
                    className="taskCheckBox"
                /> {task}
                <div className="iconContainer">
                    <img src="src/assets/trash.png" alt="" className="trashContainer" onClick={handleClick} />
                    <img src="src/assets/editer.png" alt="" className="editContainer" />
                </div>
            </li>
        </>
    )
}

export default Item