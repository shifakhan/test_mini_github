import * as React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "../components/Login";
import { NavBar } from "../components/NavBar/NavBar";
import { Repositories } from "../components/Repositories/Repositories";

export type UserProps = {
  logged_in: boolean;
  username?: string;
  name?: string;
};

const App = ({logged_in, username, name}: UserProps) => {
  return (
    <BrowserRouter>
      <Switch>
        { logged_in ?
          <React.Fragment>
            <NavBar
              logged_in={logged_in}
              name={name}
            />
            <Route path="/issues" render={() =>
              <div>
                test issues
              </div>
            } />
            <Route exact path="/" render={() =>
              <Repositories username={username} />
            } />
          </React.Fragment>
          :
          <Route path="/" render={() =>
            <React.Fragment>
              <NavBar
                logged_in={logged_in}
                name={name}
              />
              <Login />
            </React.Fragment>
          } />
        }
      </Switch>
    </BrowserRouter>
  );
};

export default App;
