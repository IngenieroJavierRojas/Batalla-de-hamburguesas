import React from "react";
import { Route, Routes } from "react-router-dom";
import { VotacionSucces } from "../Componentes/Pages/VotoSucces";
import { AlertNoInternet } from "../Componentes/AlertNoInternet";
import { Inicio } from "../Componentes/Pages/Inicio";
import { Recepcion } from "../Componentes/Pages/Recepcion";
import { ErrorServer } from "../Componentes/Pages/ErrorServer";


const AppRouter = () => {
    return (
        <Routes>
            <Route index path="/participant/:id" element={<Inicio />} />
            <Route path="/thanks" element={<VotacionSucces />} />
            <Route path="/failed" element={<AlertNoInternet />} />
            <Route path="/*" element={<Recepcion/>}/>
            <Route path="/error" element={ <ErrorServer/> }/>
        </Routes>
    );
};

export default AppRouter;
