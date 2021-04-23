import "./App.css";
import NotFound from "./Coponent/NotFound/NotFound";
import Logign from "./Coponent/Logign/Logign";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Coponent/Logign/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/login">
          <Logign></Logign>
        </Route>
        <Route exact path="/">
          <Logign></Logign>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
