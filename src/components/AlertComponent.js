import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export const AlertComponent = (props) => {
  const { link, alertType, title, text } = props.alert;

  return (
    <>
      <Alert
        onClick={() => link && window.open(`${link}`)}
        sx={{ cursor: link ? "pointer" : "auto" }}
        variant="filled"
        severity={alertType}
      >
        <AlertTitle>{title}</AlertTitle>
        {text}
      </Alert>
    </>
  );
};
