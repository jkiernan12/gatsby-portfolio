import * as React from 'react'
import profilePic from "../assets/new-profile.jpg"
import {
    aboutSection,
    aboutText,
    aboutPic
} from './aboutMe.module.css'

const AboutMe = (props) => {
    return (
        <section className={aboutSection} id="aboutMe">
        <div className={aboutText}>
          <h2>About Me</h2>
          <p>I'm a front-end software engineer in training with a focus on Javascript and its frameworks and libraries (primarily React).</p>
          <p>In my previous positions, I worked in digital and print content creation, project management, and digital marketing. I became the go-to person whenever coworkers ran into technical obstacles or when managers wanted to implement new technologies and software. </p>
          </div>
          <img src={profilePic} className={aboutPic}/>
      </section>
    )
}

export default AboutMe