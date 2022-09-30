import React from "react";
import classes from './Skill.module.css'


export const Skill = (props) => {
    return <div className={classes.skill}>
        <div className={classes.icon}></div>
        <h3 className={classes.title}>{props.title}</h3>
        <span className={classes.text}>{props.text}</span>
    </div>
}