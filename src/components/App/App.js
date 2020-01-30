import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";

import { blue } from "@material-ui/core/colors";

import TopBar from "../TopBar";
import Container from "../Container";
import SearchPage from "../SearchPage";
import GetToken from "../GetToken";
import ErrorComponent from "../Error";

import "./App.css";

import dotenv from "dotenv";

dotenv.config();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue["A200"]
    }
  }
});

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

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Route exact to="/">
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <TopBar />
            <Container render={() => <SearchPage />} />
            <ErrorComponent />
          </div>
        </ThemeProvider>
      </Route>
      <Route exact to="/auth/:token">
        <GetToken />
      </Route>
    </Router>
  );
}

export default App;
