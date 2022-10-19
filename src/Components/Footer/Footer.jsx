import React from "react";
import classes from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const Footer = () => {
    return <div className={classes.footerBlock}>
        <div className={`${styleContainer.container} ${classes.footerContainer}`}>
            <h2 className={classes.title}>Dmytro Vechorka</h2>
            <div className={classes.links}>
                <span className={classes.link}></span>
                <span className={classes.link}></span>
                <span className={classes.link}></span>
                <span className={classes.link}></span>
            </div>
        </div>
    </div>
}