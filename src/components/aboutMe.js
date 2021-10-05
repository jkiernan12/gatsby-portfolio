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
          <p>I'm a software engineer in training at the Turing School of Software and Design. JavaScript and its frameworks are my main focus, but I'm always excited to explore new tech and stacks.</p>
          <p>Curiosity, problem solving, and a love of learning have been the guiding beacons in my life. In my previous positions, I worked in digital and print content creation, project management, and digital marketing. Throughout my past careers, I found myself attracted to the technical pieces of my job, whether it was database management, web/email design, or learning about a new CRM. After creating a portal for work that integrated HTML, CSS, basic Javascript and database queries, I realized that I wanted to pursue web and software development full-time. I signed up for the Turing School, quit my job, and started having a blast learning about software engineering!</p>
          </div>
          <img src={profilePic} className={aboutPic}/>
      </section>
    )
}

export default AboutMe