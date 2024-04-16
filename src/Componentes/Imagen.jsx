import React from "react";
import imag from "../../Imagenes/imagenList.png";

export const Imagen = () => {
    return (
        <img
            src={imag}
            alt="imagen"
            style={{
                borderBottomLeftRadius: "40px",
                borderBottomRightRadius: "40px",
               
            }}
        />
    );
};