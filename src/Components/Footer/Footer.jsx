import React from "react";
import classes from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const Footer = () => {
    return <div className={classes.skillsBlock}>
        <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
            <h2 className={classes.title}>Dmytro Vechorka</h2>
        </div>
    </div>
}