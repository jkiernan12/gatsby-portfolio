import * as React from "react"
import Layout from "../components/layout"
import Splash from "../components/splash"
import AboutMe from "../components/aboutMe"
import Projects from "../components/projects"
import "@fontsource/fredericka-the-great"
import "@fontsource/open-sans"
import Contact from "../components/contact"


// data

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="John Kiernan">
      <Splash></Splash>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </Layout>
  )
}

export default IndexPage
