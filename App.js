import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Navigation from "./Navigation";
import Results from "./Results";
import requests from "./requests";

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />

      <Navigation  setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption} />
      
    </div>
  );
}

export default App;
