import React from "react";
import Footer from "./components/footer/footer.componet";
import "./App.css";
import Header from "./components/header/header.component";
import Info from "./components/info/info.component";
import Nav from "./components/nav/nav.components";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/homepage";
import Infromatie from "./pages/informatie/informatie";
import Contact from "./pages/contact/contactpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/informaite" component={Infromatie} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Info />
      <Footer />
    </div>
  );
}

export default App;
