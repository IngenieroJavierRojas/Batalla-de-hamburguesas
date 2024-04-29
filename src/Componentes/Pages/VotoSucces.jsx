import React, { useContext, useState } from "react";
import { Succesfull } from "../Icons";
import { LoaderContext } from "../LoaderProvider";
import { CustomButton } from "../CustomButton";
import { ConfettiComponent } from "../Confetti";
import { makeStyles } from "@mui/styles";
import "animate.css";
import { Container, Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
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

                    <div className={styles.divContaText}>
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
    divContaText: {
        padding: "0px 20px",
    },
});



    //    <Container
    //         style={{
    //             background: "white",
    //             height:'100vh',
    //             width:'auto'
               
    //         }}
    //     >
    //         <Grid
    //             padding="20px 0px"
    //             container
    //             spacing={2}
    //             columns={{xs:12, md:10, sm:12}}
    //             justifyContent="center"
    //             alignItems="center"
    //             minWidth='390px'
    //             maxWidth='390px'                
                
    //         >
    //             <Grid
    //                 item
    //                 sm={12}
    //                 md={5}
    //                 alignItems="center"
    //                 justifyContent="center"
                  
    //             >
    //                 <ConfettiComponent />

    //                 <Succesfull />
    //             </Grid>
    //             <Grid
    //                 item
    //                 sm={4}
    //                 md={10}
    //                 fontSize={26}
    //                 color="black"
    //                 fontWeight="bold"
    //                 textAlign="center"
    //             >
    //                 <h3>¡Voto Registrado!</h3>
    //             </Grid>
    //         </Grid>
    //     </Container>