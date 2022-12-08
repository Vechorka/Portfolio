import React from "react";
import classes from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";


export const Contacts = () => {
    return <div className={classes.contactsBlock}>
                <div className={`${styleContainer.container} ${classes.contactsContainer}`}>
                    <h2 className={classes.title}>Contacts</h2>
                    <div className={classes.formBlock}>
                        <form className={classes.form} action="">
                            <input type="text"/>
                            <input type="text"/>
                            <textarea rows={8}></textarea>
                        </form>
                    </div>
                    <button type='submit' className={classes.button}>Send</button>

                </div>

            </div>
}