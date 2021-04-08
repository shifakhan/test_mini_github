import * as React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Login } from "../components/Login";

export type UserProps = {
  logged_in: boolean;
  username?: string;
  name?: string;
};

const App = (props: UserProps) => {
  return (
    <React.Fragment>
      <NavBar
        logged_in={props.logged_in}
        name={props.name}
      />
      { props.logged_in ?
        <div>
          Logged in
        </div>
        :
        <Login />
      }
    </React.Fragment>
  );
};

export default App;
