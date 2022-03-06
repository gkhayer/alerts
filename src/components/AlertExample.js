import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Grid,
} from "@mui/material";
export const AlertExample = (props) => {
  const [formInput, setFormInput] = React.useState({
    title: "",
    text: "",
    link: "",
    timeLimit: "",
    alertType: "error",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    props.dispatch({
      type: "ADD_ALERT",
      payload: { ...formInput, id },
    });
    setTimeout(
      () => {
        props.dispatch({
          type: "DELETE_ALERT",
          payload: { id },
        });
      },
      formInput.timeLimit ? formInput.timeLimit * 1000 : 10000
    );
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        "& .MuiTextField-root": { m: 1, width: "12rem" },

        background: "#bce3ca",
        padding: 1,
        mt: "5rem",
        borderRadius: "1rem",
        boxShadow: ".2rem .2rem .2rem .1rem #00000078",
      }}
      validate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" textAlign="center">
        Alert Form
      </Typography>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Grid container justifyContent="center">
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            defaultValue={formInput.title}
            onChange={handleInput}
          />
          <TextField
            required
            label="Description"
            variant="outlined"
            name="text"
            defaultValue={formInput.text}
            onChange={handleInput}
          />
          <TextField
            label="Link"
            variant="outlined"
            name="link"
            type="url"
            placeholder="https://example.com"
            defaultValue={formInput.link}
            onChange={handleInput}
          />
          <TextField
            type="text"
            placeholder="10"
            inputProps={{ inputMode: "numeric", pattern: "[0.00-9.99]*" }}
            label="Time Limit"
            variant="outlined"
            name="timeLimit"
            defaultValue={formInput.timeLimit}
            onChange={handleInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">secs</InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ width: "12rem", my: 1 }}>
            <InputLabel>Alert Type</InputLabel>
            <Select
              value={formInput.alertType}
              required
              label="Alert Type"
              name="alertType"
              onChange={handleInput}
            >
              <MenuItem value={"error"}>Error</MenuItem>
              <MenuItem value={"warning"}>Warning</MenuItem>
              <MenuItem value={"info"}>Info</MenuItem>
              <MenuItem value={"success"}>Success</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Box>
      <Button variant="contained" type="submit">
        Create Alert
      </Button>
    </Box>
  );
};
