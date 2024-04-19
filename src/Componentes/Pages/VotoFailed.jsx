import React, { useContext } from "react";
import { Aviso } from "../Icons";
import { CustomButton } from "../CustomButton";
import { makeStyles } from "@mui/styles";
import { LoaderContext } from "../LoaderProvider";
export const VotoIncorrecto = () => {
    const { changeLoading } = useContext( LoaderContext );
    const styles = useStyles ();
    changeLoading(false)
  
        return (
        <div className={styles.container} >
            <div className={styles.containerHijo}>
                <Aviso  />
                <div className={styles.editTitle}>
                    <h3>Oops !</h3>
                    <h4>Un voto por participante</h4>
                </div>
                    <p className={styles.editText}>
                        No te preocupes, ¡Todos cometemos errores! Elige otro
                        participante para votar
                    </p>
                
            </div>
        </div>
    );
};

const useStyles = makeStyles({
    container : {
        margin : 'auto',
        backgroundColor: '#ffffff',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: '20px',
    },
    containerHijo : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '30px',
    },
    editText : {
        textAlign : 'center',
        fontSize : '80%',
        margin: '5px 0px',

    },
    editTitle : {
        textAlign : 'center',
        color : '#803012',
        fontWeight : 'bold',
        fontSize: '20px',
    }
})

