import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return <div className={classes.header}>
        <nav>
            <ul>
                <li><a href="">Main</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    </div>
}