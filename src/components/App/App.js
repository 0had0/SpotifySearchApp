import React, { useState, useEffect } from "react";

import { makeStyles, Snackbar } from "@material-ui/core";

import TopBar from "../TopBar";
import Container from "../Container";
import SearchPage from "../SearchPage";

import "./App.css";

import dotenv from "dotenv";

dotenv.config();

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    width: "100%",
    height: "100vh"
  }
}));

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

function App() {
  const classes = useStyles();
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) setToken(_token);
  }, []);
  return (
    <div className={classes.root}>
      <TopBar />
      <Container render={() => <SearchPage token={token} />} />
    </div>
  );
}

export default App;
