import React, { useContext, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { LoaderContext } from "./LoaderProvider";
import { makeStyles } from "@mui/styles";
import { CustomButton } from "./CustomButton";
import { useParticipant } from "../CustomHooks/useParticipant";

export const OtpCorrecion = () => {
    const { changeLoading } = useContext(LoaderContext);
    const [ otp, setOtp ] = useState("");
    const { handleClick } = useParticipant();

    const enableBtn = () => {
    
    }

    const styles = useStyles();

    changeLoading(false);

    console.log(otp);


    return (
        <div className={styles.container}>
            <div className={styles.containerHijo}>
                <div className={styles.containerModa}>
                    <h2 className={styles.title}>
                        Verificar Número de Teléfono{" "}
                    </h2>
                    <p className={styles.textDiv}>
                        Hemos enviado el código a tu número
                    </p>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<p> -- </p>}
                        inputStyle={{
                            width: "40px",
                            height: "40px",
                            fontSize: "20px",
                            border: "1px solid brown",
                            borderRadius: "10px",
                            textAlign: "center",
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                    <span>
                        {" "}
                        Si no recibiste un código <a>Reenviar</a>
                    </span>
                    <CustomButton
                        name={"Confirmar"}
                        action={handleClick}
                        enable={false}
                    />
                </div>
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
        margin: "auto",
        minWidth: "390px",
        maxWidth: "390px",
        background: "grey",
        height: "100%",
        borderRadius: "30px",
        animation: "fadeIn",
        animationDuration: "1.4s",
    },
    containerModa: {
        maxWidth: "370px",
        minWidth: "370px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        minHeight: "45%",
        alignItems: "center",
        gap: "15px",
        borderRadius: "30px",
    },
    textDiv: {
        marginTop: "5px",
        marginBottom: "5px",
    },
    title: {
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "bold",
        color: "black",
    },
});
