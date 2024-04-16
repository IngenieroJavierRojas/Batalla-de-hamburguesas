import React from "react";
import img from "../assets/hamburguesa.png";
import "./Pages/Estilos/Loader.css";
import { CircularProgress } from "@mui/material";

export const Loader = () => {
    return (
        <div className="loader">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15,
                }}
            >
                <img src={img} alt="imagen" width={80} className="rotacion" />
                <h2 className="clash2">Cargando...</h2>
            </div>
        </div>
    );
};

export const LoaderModal = () => {
    return (
        <>
        

            <div
                className="backdrop"
                style={{
                    background: "white",
                    opacity: 0.6,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 99999999999999999,
                    borderRadius: 4,
                    backdropFilter: 'blur(3px)',
                }}
            />
            <CircularProgress
                style={{
                    position: "absolute",
                    zIndex: 999999999999999,
                    top: "50%",
                    left: "50%",
                    translate: "-50% -50%",
                }}
            />
        </>
    );
};

