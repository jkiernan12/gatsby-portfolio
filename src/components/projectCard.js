import * as React from 'react'
import {
    projectImage,
    projectDescription,
    projectButton,
    project
} from './projectCard.module.css'

const ProjectCard = (props) => {
    return (
        <article className={project} href={props.projectLink}>
            <h3>{props.projectTitle}</h3>
            <img className={projectImage} src={props.projectImage}/>
            <p className={projectDescription}>{props.projectBody}</p>
            <a className={projectButton} href={props.projectLink} target="_blank">View on GitHub</a>
        </article>
    )
}

export default ProjectCard