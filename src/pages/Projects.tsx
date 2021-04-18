import React from "react";
import Project from "../components/Projects/Project";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-1"
        btn="red"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-2"
        btn="purple"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-4"
        btn="blue"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-3"
        btn="orange"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-1"
        btn="red"
      />
    </div>
  );
};

export default Projects;
