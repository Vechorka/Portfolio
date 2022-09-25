import classes from './App.module.css'
import {Header} from "./Components/Header/Header";
import React from "react";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/skills/Skills";


function App() {
  return (
    <div >
        <Header/>
        <Main/>
        <Skills/>
    </div>
  );
}

export default App;
