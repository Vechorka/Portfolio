import React from "react";
import classes from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";


export const Contacts = () => {
    return <div className={classes.contactsBlock}>
                <div className={styleContainer.container}>
                    <h2 className={classes.title}>Contacts</h2>
                </div>

            </div>
}