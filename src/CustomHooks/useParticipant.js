import React, { useCallback, useContext, useEffect, useState } from "react";
import { LoaderContext } from "../Componentes/LoaderProvider";
import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";
import { ModalContext } from "../Componentes/Modal";

export const useParticipant = () => {
    
    const [participant, setParticipant] = useState(null);
    const { changeLoading } = useContext(LoaderContext);
    const { openModal } = useContext(ModalContext);
    const { id } = useParams();

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
    };
};
