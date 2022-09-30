import classes from './App.module.css'
import {Header} from "./Components/Header/Header";
import React from "react";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";


function App() {
  return (
    <div >
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
    </div>
  );
}

export default App;
