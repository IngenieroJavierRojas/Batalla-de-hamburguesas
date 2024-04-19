import { TextField, Rating } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { useParticipant } from "../CustomHooks/useParticipant";
import { Imagen } from "./Imagen";
import { CustomButton } from "./CustomButton";
import { makeStyles } from "@mui/styles";
import { useValidateForm } from "../CustomHooks/useValidateForm";
import 'animate.css'
export const Form = (props) => {
    const { participant: data2 } = useParticipant();
    const [ stars, setStars ] = useState(1)

    const styles = useStyles();
    const {onSubmit} = useValidateForm(stars);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        FuncionSubModal();
    }, [errors]);

    const FuncionSubModal = () => {
        if (Object?.keys(errors)?.length <= 0) return;
        Swal.fire({
            icon: "error",
            title: "¡Cuidado!",
            text: "Ingresa correctamente los datos.",
        });
    };



    return (
        <div className={styles.main}>
            <Imagen />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formEdit}>
                <h2 className={styles.title}>
                    {data2 ? data2.nombre.toUpperCase() : null}
                </h2>
                <div className={styles.rating}>
                    <Rating
                        size="large"
                        sx={{
                            fontSize: "46px",
                        }}
                        defaultValue={stars}
                        {...register("estrellas", {
                            onChange: (e) => setStars(Number(e.target.value)),
                        })}
                    />
                    <span className="sp">
                        Califica con estrellas la experiencia vivida
                    </span>
                </div>

                <Controller
                    name="telefono"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            type="tel"
                            name="telefono"
                            label="Número de teléfono"
                            color="success"
                            size="medium"
                            style={{
                                width: "80%",
                            }}
                            InputProps={{
                                sx: {
                                    borderRadius: 3,
                                    background: "#FFE9DD",
                                },
                            }}
                            error={errors.numero}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    rules={{
                        required: "* El campo es requerido.",
                        pattern: {
                            value: /^3+[0-9]{9}$/g,
                            message: "El número no es valido",
                        },
                    }}
                />

                <TextField
                    multiline
                    name="comentario"
                    minRows={3}
                    id="comentario"
                    placeholder="Comentario"
                    color="success"
                    style={{
                        width: "80%",
                    }}
                    InputProps={{
                        sx: {
                            borderRadius: 3,
                            background: "#FFE9DD",
                            color: "black",
                        },
                    }}
                    {...register("comentario")}
                />

                <span c>
                    Al continuar,{" "}
                    <a
                       
                        href="https://www.camaracartago.org/politica-de-tratamiento-de-datos-personales/"
                    >
                        acepta nuestra política de protección y tratamiento de
                        datos personales.
                    </a>
                </span>

                <CustomButton
                    name={"Enviar"}
                    action={FuncionSubModal}
                    enable={false}
                />
                <footer
                    style={{
                        color: "black",
                        marginTop: "5px",
                        fontSize: "90%",
                    }}
                >
                    Todos los derechos reservados 2024.
                </footer>
            </form>
        </div>
    );
};

const useStyles = makeStyles({
    main: {
        position: "inherit",
        background: "#fff",
        minWidth: "390px",
        maxWidth: "390px",
        height: "100vh",
        margin: "auto",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexFlow: "column noWrap",
        alignItems: "center",
        gap: "5px 0px",
        borderRadius: "20px",
        animation: "fadeInRightBig",
        animationDuration: "1s",
    },
    title: {
        color: "black",
        textAlign: "center",
    },
    rating: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    formEdit: {
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
    },
});
