import React from "react";
import classes from "./Projects.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./project/Project";



export const Projects = () => {
    return <div className={classes.projectsBlock}>
                <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                    <h2 className={classes.title}>My Projects</h2>
                    <div className={classes.projects}>
                        <Project title={'Social Network'} text={'lalalalalla'}/>
                        <Project title={'TodoList'} text={'lalalalalla'}/>
                    </div>
                </div>
            </div>
    }


