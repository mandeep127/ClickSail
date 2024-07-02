import React from "react";
import Layouts from "./component/user/Layouts";
import AuthRouting from "./routes/AuthRouting";

function App() {
  return (
    <>
      <AuthRouting />
      <Layouts />
    </>
  );
}

export default App;
