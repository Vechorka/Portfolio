import classes from './App.module.css'
import {Header} from "./Components/Header/Header";
import React from "react";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";


function App() {
  return (
    <div >
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
