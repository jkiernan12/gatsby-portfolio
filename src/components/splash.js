import * as React from 'react'
// import storm from "./assets/storm.jpg"
import {Link} from 'gatsby'
import {
    splash,
    intro,
    introText,
    splashHeader
} from './splash.module.css'

const Splash = (props) => {
    return (
    <section className={splash}>
        <div className={intro}>
        <div className={introText}>
        <p>Ahoy webfarer, my name is</p>
            <h1 className={splashHeader}>
        John Kiernan
      </h1>
      <h2>I'm a student of the Turing School of Software and Design and a front-end developer in training. Learning the intricacies of HTML, CSS, JavaScript and its frameworks.</h2>
      </div>
      </div>
      </section>
    )
}

export default Splash