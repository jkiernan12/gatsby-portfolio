import * as React from 'react'
import ProjectCard from "./projectCard"
import calculator from "../assets/calculator.png"
import etch from "../assets/etch.png"
import care from "../assets/care.png"
import {
    projectContainer,
    projectSection
} from './projects.module.css'

const Projects = (props) => {
    return (
        <section className={projectSection} id="projects">
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
            projectTitle="Calculator" 
            projectBody="You've seen it before and you'll see it again -- the classic calculator project"
            projectImage={calculator}
            projectLink="https://github.com/jkiernan12/calculator"></ProjectCard>
            </div>
        </section>
    )
}

export default Projects