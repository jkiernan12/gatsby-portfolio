import * as React from 'react'
import ProjectCard from "./projectCard"
import ticTacToe from "../assets/tic-tac-toe.png"
import etch from "../assets/etch.png"
import care from "../assets/care.png"
import { StaticImage } from 'gatsby-plugin-image'
import {
    projectContainer,
    projectSection,
    projectHeader
} from './projects.module.css'

const Projects = (props) => {
    return (
        <section className={projectSection} id="projects">
            <h2 className={projectHeader}>Projects</h2>
            <div className={projectContainer}>
            <ProjectCard 
            projectTitle="Self Care Center" 
            projectBody="A simple project with vanilla JS that delivers a random mantra or affirmation"
            projectImage={care}
            projectLink="https://github.com/jkiernan12/self-care-center"></ProjectCard>
            <ProjectCard 
            projectTitle="Sketch a Pixel" 
            projectBody="Vanilla JS project that imitates the classic etch-a-sketch toy but with custom colors and rainbow"
            projectImage={etch}
            projectLink="https://github.com/jkiernan12/etch-sketch"></ProjectCard>
            <ProjectCard 
            projectTitle="Tic Tac Toe" 
            projectBody="A spooky tic tac toe featuring responsive design and data persistence with local storage"
            projectImage={ticTacToe}
            projectLink="https://github.com/jkiernan12/tic-tac-toe"></ProjectCard>
            </div>
        </section>
    )
}

export default Projects