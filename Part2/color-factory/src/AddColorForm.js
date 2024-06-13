import React from "react";
import { useState } from "react";

const AddColorForm = ( {toggleHiding , addColor }) => {

    const INITIAL_STATE = {
        colorName: "",
        hexCode: ""
    }

    const [newColor, setNewColor] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target
        setNewColor( c => ({
            ...c, [name]: value
        }));
        
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        addColor(newColor)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="colorName">Color Name:</label>
                <input onChange={handleChange} id="colorName" type="text" value={newColor.colorName} name="colorName"></input>
            </div>

            <div>
                <label htmlFor="hexCode"></label>
                <input onChange={handleChange} type="color" value={newColor.hexCode} name="hexCode"></input>
            </div>
            <button onClick={toggleHiding}>Add New Color</button>
        </form>
    )
}

export default AddColorForm;