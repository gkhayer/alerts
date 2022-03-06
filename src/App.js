import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { AlertExample } from "./components/AlertExample";
import { AlertManager } from "./components/AlertManager";

function App() {
  const [state, dispatch] = React.useReducer(useAlertReducer, []);
  return (
    <Container maxWidth="xl">
      <AlertExample dispatch={dispatch} />
      <AlertManager state={state} />
    </Container>
  );
}

export default App;
