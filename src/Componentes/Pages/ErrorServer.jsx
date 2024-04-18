import React, { useContext } from 'react'
import { LoaderContext } from '../LoaderProvider';
import { makeStyles } from '@mui/styles';
import { infoError } from '../Icons';

export const ErrorServer = () => {
    const { changeLoading } = useContext (LoaderContext);
    changeLoading(false)

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.containerHijo}>
                <infoError />
            </div>
        </div>
    );
}
const useStyles = makeStyles({
        container: {
        backgroundColor: "#ffffff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(../Imagenes/fondo.jpg)",
        padding: "30px 0px",
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
        animation: "bounceIn",
        animationDuration: "1s",
    },
})

