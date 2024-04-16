import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ModalContext } from "../Componentes/Modal";
import { OtpInputGroup } from "../Componentes/OtpInputGroup";
import { LoaderContext } from "../Componentes/LoaderProvider";

export const useValidateForm = (stars) => {

    const { openModal } = useContext( ModalContext );
    const { id } = useParams();
   
    const onSubmit = async (data) => {
       
        const newObj = { ...data, estrellas: stars, participante_id: id };
        console.log(newObj)
    
        try {
            const response = await fetch(
                "http://192.168.1.120:5000/api/otp/send-otp",
                {
                    method: "POST",
                    body: JSON.stringify({ telefono: newObj.telefono }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const { ok } = await response.json();
            if (!ok) {
                console.log("si ingresó");
                openModal(<VotoIncorrecto />);
            } else {
                openModal(<OtpInputGroup data={newObj} />);
            }
        
        

        } catch (error) {
            console.log(error);
        }
    };

    return {
        onSubmit,
        
    };
};
