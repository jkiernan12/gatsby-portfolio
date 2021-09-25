import * as React from 'react'
import {
    contactSection,
    contactText,
    contactIcons
} from './contact.module.css'
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import email from "../assets/email.svg"
const Contact = (props) => {
    return (
        <section className={contactSection} id="aboutMe">
        <div className={contactText}>
          <h2>Conctact Me</h2>
          <p>Feel free to connect with me on LinkedIn, check out my GitHub profile, or shoot me an email!</p>
          <div className={contactIcons}>
              <a target="_blank" href="https://github.com/jkiernan12"><img src={github} /></a>
              <a target="_blank" href="https://www.linkedin.com/in/johnfkiernan/"><img src={linkedin} /></a>
              <a target="_blank" href="mailto:jkiernan12@yahoo.com"><img src={email} /></a>
          </div>
          </div>
        </section>
    )
}

export default Contact