import React from "react";
import classes from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const Main = () => {
    return <div className={classes.main}>
        <div className={styleContainer.container}>
            <div className={classes.aboutMe}>
                <h5>Hi, I'm</h5>
                <h3>Dmytro Vechorka</h3>
                <h1>Fronted Developer</h1>
            </div>
            <div className={classes.photo}></div>
        </div>
    </div>
}