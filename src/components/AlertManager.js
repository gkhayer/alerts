import React from "react";

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
  console.log(props.state);
  return <></>;
};
