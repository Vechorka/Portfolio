import React from "react";
import classes from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const Skills = () => {
    return <div className={classes.skillsBlock}>
        <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
            <h2 className={classes.title}>Skills</h2>
            <div className={classes.skills}>

            </div>
        </div>
    </div>
}