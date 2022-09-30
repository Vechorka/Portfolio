import React from "react";
import classes from './Project.module.css'


export const Project = (props) => {
    return <div className={classes.project}>
        <div className={classes.photo}></div>
        <div className={classes.description}>
            <h4>{props.title}</h4>
            <span>{props.text}</span>
        </div>
    </div>
}