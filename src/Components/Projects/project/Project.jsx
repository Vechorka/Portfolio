import React from "react";
import classes from './Project.module.css'


export const Project = (props) => {
    return <div className={classes.project}>
                <div className={classes.photo}></div>
                    <h4 className={classes.title}>{props.title}</h4>
                    <span className={classes.text}>{props.text}</span>
          </div>
}