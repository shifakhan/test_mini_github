import * as React from "react";
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
    <React.Fragment>
      <NavBar
        logged_in={logged_in}
        name={name}
      />
      { logged_in ?
        <Repositories username={username} />
        :
        <Login />
      }
    </React.Fragment>
  );
};

export default App;
