import React from "react";
import { Route, Routes } from "react-router-dom";
import { VotacionSucces } from "../Componentes/Pages/VotoSucces";
import { AlertNoInternet } from "../Componentes/AlertNoInternet";
import { Inicio } from "../Componentes/Pages/Inicio";

const AppRouter = () => {
    return (
        <Routes>
            <Route index path="/participant/:id" element={<Inicio />} />
            <Route path="/thanks" element={<VotacionSucces />} />
            <Route path="/failed" element={<AlertNoInternet />} />
        </Routes>
    );
};

export default AppRouter;
