import React from "react";
import WbnPlayer from "./WbnPlayer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";

function App() {
  return (
    <Router basename="/">
      <>
        <Switch>
          <Route exact path="/" component={WbnPlayer} />
          <Route exact path="/:activeVideo" component={WbnPlayer} />
        </Switch>
        <GlobalStyles />
      </>
    </Router>
  );
}

export default App;
