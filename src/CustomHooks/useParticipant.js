import React, { useCallback, useContext, useEffect, useState } from "react";
import { LoaderContext } from "../Componentes/LoaderProvider";
import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";

export const useParticipant = () => {
    const [participant, setParticipant] = useState(null);
    const { changeLoading } = useContext(LoaderContext);
    const { id } = useParams();
     const [error, seterror] = useState(null);

    const respuesta = useFetch();

    useEffect (() => {
        let unsuscribed = true;

        unsuscribed && getParticipant();

        return () => unsuscribed = false;
    }, [id] );

    const getParticipant = useCallback (async () => {

        const response = await fetch (`http://192.168.1.120:5000/api/participants/${id}`);
        const { ok, data } = await response.json();
     
        changeLoading( false );
        setParticipant( data );
    }, [id]);


    const handleClick = async () => {
        const payload = { ...data, otp: Object.values(inputValues).join("") };
        console.log(payload);
        const { ok, message } = await respuesta(
            "http://192.168.1.120:5000/api/otp/verify-otp",
            {
                method: "POST",
                body: JSON.stringify(payload),
            }
        );

        const [voter, participant] = await Promise.all([
            registerVoter(payload),
            updateParticipant(payload),
        ]);
        if (!voter?.ok || !participant?.ok) {
            console.log(voter?.message);
            console.log(participant?.message);

            return;
        }

        seterror(message);

        setEnabledBtn(false);

        changeLoading(true);
        if (ok) {
            setTimeout(() => {
                changeLoading(false);
                closeModal();
                navigate("/thanks");
            }, 500);
        } else {
            setTimeout(() => {
                changeLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "¡Cuidado!",
                    text: "El codigo ingresado no es correcto.",
                });
                // openModal(<VotoIncorrecto/>)
            }, 500);
        }
    };

    const updateParticipant = async (params) => {
        try {
            const { participante_id, estrellas } = params;
            const response = await respuesta(
                `http://192.168.1.120:5000/api/participants/${participante_id}`,
                {
                    method: "PUT",
                    body: JSON.stringify({ estrellas }),
                }
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        participant,
        updateParticipant,
        handleClick
    };
};
