import React from "react";
import { CustomButton } from "./CustomButton";
import { NoConexion } from "./Icons";
import { makeStyles } from "@mui/styles";

export const AlertNoInternet = () => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.containerHijo}>
                <div>
                    <NoConexion />
                </div>
                <h3 className={styles.spanEdit}>Sin Internet!</h3>
                <p className={styles.paragraphaAlert}>
                    Se detectó una mala conexión de internet. Por favor
                    verifique su conectividad
                </p>

                <CustomButton
                    name={"Reintentar"}
                    action={() => window.location.reload()}
                    enable={false}
                />
            </div>
        </div>
    );
};
const useStyles = makeStyles({
    container: {
        margin: "auto",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
    },
    containerHijo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
    },
    spanEdit: {
        color: "#803012",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    paragraphaAlert: {
        fontSize: "83%",
        textAlign: "center",
        marginBottom: "25px",
    },
});
