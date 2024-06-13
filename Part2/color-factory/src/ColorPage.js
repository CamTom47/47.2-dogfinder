import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ColorPage = () => {

    let {color} = useParams(); 
    const navigate = useNavigate();

    function handleClick(){
        navigate('/colors')
    }

    return (
        <div className="ColorPage-div" >
            <p style={{textColor:{color}}}>jfoiadjfoaifasf</p>
            <button onClick={handleClick}>Go Back</button>
            
        </div>
    )


}

export default ColorPage;