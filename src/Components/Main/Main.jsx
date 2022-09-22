import React from "react";
import classes from './Main.module.css'


export const Main = () => {
    return <div className={classes.main}>
        <div className={classes.container}>
            <div className={classes.aboutMe}>
                <span>Hi There</span>
                <h1>I am Dmytro Vechorka</h1>
                <p>Fronted Developer</p>
            </div>
            <div className={classes.photo}></div>
        </div>
    </div>
}