import * as React from "react"
import "/src/components/layout.module.css"
import Layout from "../components/layout"
import Splash from "../components/splash"
import {Link} from "gatsby"
import {
  splash
} from "/src/components/layout.module.css"
import "@fontsource/fredericka-the-great"
import "@fontsource/open-sans"


// data

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="John Kiernan">
      <Splash></Splash>
      <section className="about-me" id="aboutMe">
        <div className="intro__text">
          <h2>About Me</h2>
          <p>I'm a front-end software engineer in training with a focus on Javascript and its frameworks and libraries (primarily React).</p>
          <p>In my previous positions, I worked in digital and print content creation, project management, and digital marketing. I became the go-to person whenever coworkers ran into technical obstacles or when managers wanted to implement new technologies and software. </p>
          </div>
      </section>
      </Layout>
  )
}

export default IndexPage
