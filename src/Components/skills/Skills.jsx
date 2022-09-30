import React from "react";
import classes from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return <div className={classes.skillsBlock}>
        <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
            <h2 className={classes.title}>Skills</h2>
            <div className={classes.skills}>
            <Skill title={'HTML'} text={'lalallalalalalalasaa'}/>
            <Skill title={'CSS'} text={'lalallalalalasadadadasdlal'}/>
            <Skill title={'REACT'} text={'lalal aladadasdadad adadad asdadadsa dlalalal'}/>
            </div>
        </div>
    </div>
}