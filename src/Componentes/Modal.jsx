import { Box, Modal } from "@mui/material";
import React, { createContext, useState } from "react";
import { Cerrar } from "./Icons";
import { makeStyles } from "@mui/styles";
import { LoaderModal } from "./Loader";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState(<></>);
    const styles = useStyles();
    const openModal = (component = <></>) => {
        setContent(component);
        setOpen(true);
    };

    const closeModal = () => setOpen(false);
    const changeLoading = () => setIsLoading((prev) => !prev);

    return (
        <ModalContext.Provider value={{ openModal, closeModal, changeLoading }}>
            {children}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                       position: "absolute",
                       top: "50%",
                       left: "50%",
                       transform: "translate(-50%, -50%)",
                       bgcolor: "background.paper",
                       borderTopLeftRadius: "25px",
                       borderTopRightRadius: "25px",
                       borderBottomLeftRadius: "25px",
                       borderBottomRightRadius: "25px",
                       minWidth: "390px",
                       maxWidth: "390px",
                }}>
                    {isLoading && <LoaderModal />}
                    <span className={styles.btnCerrar} onClick={closeModal}>
                        <Cerrar />
                    </span>
                    {content}
                </Box>
            </Modal>
        </ModalContext.Provider>
    );
};

const useStyles = makeStyles({
    btnCerrar: {
        position: "absolute",
        right: "10px",
        top: "10px",
        cursor: "pointer",
    },
});

/*Recordar los conceptos de  las funciones y metodos y como estas se deben trabajar al momento de trabajar un modal
por ejemeplo tengo que el modalProvider recibe un children que en su caso lo tengo marcado en el return de lo que va a devolver
seguido de esto debo declarar 2 funciones las cuales van a ser open, setOpen para darle valor al modal y poder iniciarlo en base a si es true o false
seguido de esto, el otro concepto que se da es el parametro setOpen el cual nos permitirá cambiar el valor predeterminado para poder cerrar o abrir

seguido de eso, creamos el componente body o componente para lo que se va a recibir dentro del componente a renderizar, en este caso, lo que va a recibir el boton
como tal, es decir, los argumentos del
*/
