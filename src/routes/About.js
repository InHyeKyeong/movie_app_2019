import React from "react";

function About(props) {
  // react-router로 인해 넘어온 props
  console.log(props)
  return <span>About this page : I built it because i love movie</span>
}

export default About;