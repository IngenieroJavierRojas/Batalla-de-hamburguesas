import React, { useContext, useState } from "react";
import { Succesfull } from "../Icons";
import { LoaderContext } from "../LoaderProvider";
import { CustomButton } from "../CustomButton";
import { ConfettiComponent } from "../Confetti";
import { makeStyles } from "@mui/styles";
import 'animate.css'
export const VotacionSucces = () => {
    const { changeLoading } = useContext(LoaderContext);
    const styles = useStyles();
    changeLoading(false);

    return (
        <div className={styles.container}>
            <div className={styles.containerHijo}>
                <ConfettiComponent />

                <Succesfull />
                <h3 className={styles.subtitleVoter}>¡Voto Registrado!</h3>

                <div>
                    <p className={styles.paragraphEdit}>
                        ¡Felicidades! Tu voto por el participante ha sido
                        registrado con éxito. ¡Gracias por ser parte de esta
                        gran experiencia!
                    </p>
                    <p className={styles.paragraphFooter}>
                        ¡Sigue apoyando lo Nuestro!
                    </p>
                </div>
                <CustomButton
                    name={"Ok"}
                    action={() =>
                        (location.href = "https://www.camaracartago.org/")
                    }
                    enable={false}
                />
            </div>
        </div>
    );
};

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
        animation: "bounceIn",
        animationDuration: "0.4s",
       
        
        
    },
    subtitleVoter: {
        fontSize: "26px",
        fontWeight: "bold",
    },
    paragraphEdit: {
        textAlign: "center",
        marginTop: "2px",
        fontWeight: "normal",
    },
    paragraphFooter: {
        margin: "10px 0px",
        textAlign: "center",
    },
});
