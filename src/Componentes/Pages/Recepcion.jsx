import React, { useContext } from 'react'
import { LoaderContext } from '../LoaderProvider'
import { makeStyles } from '@mui/styles';
import fondo2 from '../../../Imagenes/fondo2.png'
import { ConfettiComponent } from '../Confetti';
import 'animate.css'
export const Recepcion = () => {
    const { changeLoading } = useContext( LoaderContext )
    changeLoading( false );
    const style = useStyles();
  return (
    <div className={style.container}>
        <div className={style.containerHijo}>
            <ConfettiComponent/>
            <img src={fondo2} alt="" />
            <p className={style.text}>JUNIO 2024</p>
            <p className={style.textAlter}>¡ Prepara tu paladar !</p>
        </div>
    </div>
  )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: "#ffffff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(../Imagenes/fondo.jpg)",
        padding: "20px 0px",
    },
    containerHijo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "auto",
        minWidth: "390px",
        maxWidth: "390px",
        background: "white",
        height: "100%",
        borderRadius: "30px",
        animation: "fadeIn",
        animationDuration: "1.4s",
    },
    text: {
        position: "absolute",
        textAlign: " center",
        marginTop: "150px",
        color: "white",
        fontSize: "25px",
    },
    textAlter: {
        position: "absolute",
        textAlign: " center",
        marginTop: "200px",
        color: "#F1EEED",
        fontSize: "20px",
    },
});

// animate__tada;
// animate__backInRight;
