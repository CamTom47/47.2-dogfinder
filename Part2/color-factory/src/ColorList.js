import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddColorForm from "./AddColorForm";
import "./ColorList.css"

const ColorList = () => {

    const INITIAL_STATE = [];

    const [ colors, setColors ] = useState(INITIAL_STATE);
    const [isHiding, setIsHiding] = useState(true);
       
    const addColor = (newColor) => {
        setColors(colors => [...colors, newColor])
    }

    const toggleHiding = () => {
        setIsHiding(!isHiding)
    }


  
    
    
    const colorComponents = colors.map( color => (
        <div>
            <Link to={`/colors/${color.colorName}`} >{color.colorName}</Link>
        </div>
    ))

    return (
        <>
        <div className={isHiding ? "hidden" : "unhidden"}>
            <AddColorForm addColor={addColor} toggleHiding={toggleHiding}/>
        </div>
            <button className={isHiding ? "unhidden" : "hidden"} onClick={toggleHiding}>Add a new Color</button>
            {colorComponents}

        </>
    )
}

export default ColorList