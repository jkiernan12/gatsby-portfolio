import * as React from 'react'
import {
    contactSection,
    contactText,
    contactIcons
} from './contact.module.css'
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
const Contact = (props) => {
    return (
        <section className={contactSection} id="aboutMe">
        <div className={contactText}>
          <h2>Conctact Me</h2>
          <p>Feel free to connect with me on LinkedIn, check out my GitHub profile, or shoot me an email!</p>
          <div className={contactIcons}>
              <img src={github} />
              <img src={linkedin} />
          </div>
          </div>
        </section>
    )
}

export default Contact