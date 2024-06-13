import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"

import ColorList from "./ColorList";
import ColorPage from "./ColorPage";

const RouteList = () => {
return (

    <Routes>
        <Route exact path="/colors" element={<ColorList />}/>
        <Route exact path="/colors/:color" element={<ColorPage />}/>
        <Route path="/*" element={<Navigate to="/colors"/>}/>
        
    </Routes>

)
}

export default RouteList