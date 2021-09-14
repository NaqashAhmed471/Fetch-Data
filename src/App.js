import "./App.css";
import { Switch, Route } from "react-router-dom";
import Menubar from "./component/Menubar";
import DisplayID from "./component/DisplayID";
import DisplayData from "./component/DisplayData";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Switch>
        <Route exact path="/" component={DisplayID} />
        <Route exact path="/displaydata/:id" component={DisplayData} />
      </Switch>
    </div>
  );
}

export default App;
