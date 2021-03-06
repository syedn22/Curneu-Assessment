import "./App.css";
import { Route, Switch } from "react-router-dom";

import StandardCalculator from "./components/StandardCalculator";
import ScientificCalculator from "./components/ScientificCalculator";
import DateCalculator from './components/DateCalculator';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/scientific" component={ScientificCalculator} />
        <Route path="/date" exact component={DateCalculator} />
        <Route path="/" exact component={StandardCalculator} />
      </Switch>
    </>
  );
}

export default App;
