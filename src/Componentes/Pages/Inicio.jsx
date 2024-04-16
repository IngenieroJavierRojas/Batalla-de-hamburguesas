import React, { useContext, useState } from "react";


import { Form } from "../Form";
import { makeStyles } from "@mui/styles";
export const Inicio = () => {

    const styles = useStyles();

    return (
        <div className={styles.principal} >
            <Form />

        </div>
    );
};

const useStyles = makeStyles({
    principal :{
        display:'flex',
        alignItems :'center',
        justifyContent:'center',
        margin:'auto',
        position:'static',
        height:'100vh',
     
     
    },

})





