import React, { useContext, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { LoaderContext } from "./LoaderProvider";
import { makeStyles } from "@mui/styles";
import { CustomButton } from "./CustomButton";
import { useParticipant } from "../CustomHooks/useParticipant";

export const OtpInputGroup = () => {
    const { changeLoading } = useContext(LoaderContext);
    const [otp, setOtp] = useState("");
    const { handleClick } = useParticipant();

    const enableBtn = () => {};

    const styles = useStyles();

    changeLoading(false);

    console.log(otp);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Verificar Número de Teléfono </h2>
            <p className={styles.textDiv}>
                Hemos enviado el código a tu número
            </p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="tel"
                containerStyle={{
                    gap: "5px",
                    justifyContent: "center",
                    marginBottom: "10px",
                }}
                inputStyle={{
                    width: "40px",
                    height: "40px",
                    fontSize: "20px",
                    border: "1px solid #803012",
                    borderRadius: "10px",
                    borderTopWidth: "none",
                    borderLeftWidth: "none",
                    borderRightWidth: "none",
                    borderBottomWidth: "none",
                    borderStyle: "inherit",
                    textAlign: "center",
                    filter: "drop-shadow(0 0 0.15rem #803012)",
                    boxSizing: "inherit",
                    color: "black",
                    fontWeight: "bold",
                    borderColor: "#803012",
                    outline: "none",
                }}
                renderInput={(props) => <input {...props} />}
            />
            <span className={styles.textAviso}>
                {" "}
                Si no recibiste un código <a>Reenviar</a>
            </span>

            <CustomButton
                name={"Confirmar"}
                action={handleClick}
                enable={false}
            />
        </div>
    );
};

const useStyles = makeStyles({

    container: {
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        width: "390px",
        padding: "20px 0px",
        flexDirection: "column",
        borderRadius: "30px",
    },

    textDiv: {
        textAlign: "center",
        marginBottom: "15px",
    },
    title: {
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "bold",
        color: "black",
        marginBottom: "15px",
        paddingRight: "10px",
        paddingLeft: "10px",
    },
    textAviso: {
        textAlign: "center",
        justifyContent: "center",
        color: "#803012",
        fontWeight: "bold",
        marginBottom: "20px",
        fontSize: "15px",
        color: "black",
    },

})
