import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./styles/App.scss";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
