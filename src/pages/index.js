import * as React from "react"
import "/src/styles.css";
import "@fontsource/fredericka-the-great"
import "@fontsource/open-sans"
import profile from "/src/images/new-profile.jpg"
import storm from "/src/images/storm.jpg"


// styles
const pageStyles = {
  color: "#fcf8e6",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  background: "linear-gradient(#00021a, #0c074a, #060f6b, #144e99)",
  display: "flex",
  flexDirection: "column"

}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <title>John Kiernan</title>
      <header>
        <p className="logo">TK</p>
        <nav>
          <ul>
            <li><a>About Me</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="splash">
        <div className="intro">
        <div className="intro__text">
        <p>Ahoy webfarer, my name is</p>
            <h1>
        John Kiernan
      </h1>
      <h2>I'm a student of the Turing School of Software and Design and a front-end developer in training. Learning the intricacies of HTML, CSS, JavaScript and its frameworks.</h2>

      </div>
      </div>
      </section>
      <section className="about-me">
        <div className="intro__text">
          <h2>About Me</h2>
          <p>I'm a front-end software engineer in training with a focus on Javascript and its frameworks and libraries (primarily React).</p>

<p>In my previous positions, I worked in digital and print content creation, project management, and digital marketing. I became the go-to person whenever coworkers ran into technical obstacles or when managers wanted to implement new technologies and software. </p>
          </div>
      </section>
    </main>
  )
}

export default IndexPage
