import React from "react";
import GitHubLink from "./assets/links/GithubLink";
import HomeGreeting from "./components/HomeGeeting/HomeGreeting";
import HomeImage from "./components/HomeImage/HomeImage";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <GitHubLink />
      <Navbar />
      <HomeGreeting />
      <HomeImage />
      <Projects />
    </>
  );
}

export default App;
