import * as React from "react"
import Layout from "../components/layout"
import Splash from "../components/splash"
import AboutMe from "../components/aboutMe"
import "@fontsource/fredericka-the-great"
import "@fontsource/open-sans"


// data

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="John Kiernan">
      <Splash></Splash>
      <AboutMe></AboutMe>
    </Layout>
  )
}

export default IndexPage
