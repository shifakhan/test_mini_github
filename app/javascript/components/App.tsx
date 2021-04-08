import * as React from "react";

type Props = {
  logged_in: boolean;
  username?: string;
  name?: string;
};

const App = ({logged_in, username, name}: Props) => {
  return (
    <div>
      <h1>Mini Github</h1>
    </div>
  );
};

export default App;
