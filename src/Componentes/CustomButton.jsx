import React from "react";
import {Button} from '@mui/material'

export const CustomButton = ({name, action, enable }) => {
   
    return (
        <Button
        style={{
          backgroundColor: "#803012",
          padding: " 10px 10px 10px ",
          borderRadius: "20px",
          alignSelf: "center",
          width: "50%",
          filter: "drop-shadow(0 0 0.30rem #803012)",
          color: 'white',
          fontSize:'15px',          

        }}
        onClick={action}
        disabled={enable}
        type="submit">
            {name.toLowerCase()}
        </Button>
    );
};

CustomButton.defaultProps = {
  name : '',
  action: () => false,
  enable : ()=>false
 
}