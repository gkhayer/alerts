import React from "react";
import { Stack } from "@mui/material";
import { AlertComponent } from "./AlertComponent";

export const useAlertReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return [...state, action.payload];
    case "DELETE_ALERT":
      return state.filter((alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};
export const AlertManager = (props) => {
  return (
    <Stack
      sx={{
        top: 0,
        right: 0,
        position: "absolute",
        width: "30%",
        m: ".5rem",
      }}
      spacing={1}
    >
      {props.state?.map((alert) => (
        <AlertComponent key={alert.id} id={alert.id} alert={alert} />
      ))}
    </Stack>
  );
};
