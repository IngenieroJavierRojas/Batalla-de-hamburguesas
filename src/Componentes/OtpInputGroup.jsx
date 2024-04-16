//otpInputs.js
import "./Pages/Estilos/OtpInput.css";
import { useContext, useEffect, useState } from "react";

import { OtpInput } from "./OtpInput";
import { Button, CircularProgress } from "@mui/material";
import { ModalContext } from "./Modal";
import { useFetch } from "../CustomHooks/useFetch";
// import { Navigate } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { CustomButton } from "./CustomButton";
import { UseRegisterVoter } from "../CustomHooks/useRegisterVoter";
import { useParticipant } from "../CustomHooks/useParticipant";
//Our parent component
export const OtpInputGroup = ({ data }) => {
    const {registerVoter} = UseRegisterVoter();
    const {updateParticipant} = useParticipant();
    const navigate = useNavigate();
    const respuesta = useFetch();
    const [error, seterror] = useState(null);
    const { closeModal, changeLoading } = useContext(ModalContext);
    const { id } = useParams();

    //state to store all input boxes
    const [inputValues, setInputValues] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        // Add more input values here
    });

    const [enabledBtn, setEnabledBtn] = useState(false);

    useEffect(() => {
        let unsubscribed = true;

        unsubscribed &&
            setEnabledBtn(Object.values(inputValues).every((i) => i));

        return () => (unsubscribed = false);
    }, [inputValues]);

    //this function updates the value of the state inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };
    //this function processes form submission
    const handleSubmit = () => {
        setEnabledBtn(true);
    };

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
                setTimeout(() => {
                    changeLoading(false);
                }, 500);
                setTimeout(() => {
                    closeModal();
                }, 500);
                setTimeout(() => {
                    navigate(`/thanks`);
                }, 501);
            }, 500);
        } else {
            setTimeout(() => {
                changeLoading(false);
                closeModal();
                Swal.fire({
                    icon: "error",
                    title: "¡Cuidado!",
                    text: "El codigo ingresado no es correcto.",
                });
                navigate(`/participant/:id`);
            }, 500);
        }
    };

    //return child component
    return (
        <div className="modiOtp">
            <h2 className="edit-h2">Verificar Número de Teléfono</h2>
            <p className="edit-subtitle">Hemos enviado el código a tu número</p>
            <span className="edit-numero">{data.telefono} </span>

            <div className="my-6">
                <div
                    id="OTPInputGroup"
                    className="digitGroup"
                    data-autosubmit="true"
                >
                    <OtpInput
                        id="input1"
                        value={inputValues.input1}
                        onValueChange={handleInputChange}
                        previousId={null}
                        handleSubmit={handleSubmit}
                        nextId="input2"
                    />
                    <OtpInput
                        id="input2"
                        value={inputValues.input2}
                        onValueChange={handleInputChange}
                        previousId="input1"
                        handleSubmit={handleSubmit}
                        nextId="input3"
                    />
                    <OtpInput
                        id="input3"
                        value={inputValues.input3}
                        onValueChange={handleInputChange}
                        previousId="input2"
                        handleSubmit={handleSubmit}
                        nextId="input4"
                    />
                    {/* Seperator */}
                    {/* <span className="splitter">&ndash;</span> */}
                    <OtpInput
                        id="input4"
                        value={inputValues.input4}
                        onValueChange={handleInputChange}
                        previousId="input3"
                        handleSubmit={handleSubmit}
                        nextId="input5"
                    />
                    <OtpInput
                        id="input5"
                        value={inputValues.input5}
                        onValueChange={handleInputChange}
                        previousId="input4"
                        handleSubmit={handleSubmit}
                        nextId="input6"
                    />
                    <OtpInput
                        id="input6"
                        value={inputValues.input6}
                        onValueChange={handleInputChange}
                        previousId="input5"
                        handleSubmit={handleSubmit}
                    />
                </div>
                {error && <nav>{error}</nav>}
                <p className="edit-message">
                    Si no recibiste un codigo !{" "}
                    <span className="edit-message-reenviar">Reenviar</span>
                </p>
            </div>

            <CustomButton
                name={"Confirmar"}
                action={handleClick}
                enable={!enabledBtn}
            />
        </div>
    );
};
