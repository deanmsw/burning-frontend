import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Flights from "./components/flight/Flights";
import Airplanes from "./components/airplane/Airplanes";
import Search from "./components/search/Search";
import Reservation from "./components/reservation/Reservation";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/flights">
          <Flights />
        </Route>
        <Route path="/airplanes">
          <Airplanes />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
