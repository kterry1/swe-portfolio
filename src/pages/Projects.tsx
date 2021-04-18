import React from "react";
import Project from "../components/Projects/Project";

const Projects = () => {
  return (
    <div className="projects">
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, team, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-1"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, team, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-2"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, team, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-3"
      />
      <Project
        img=""
        title="Coffee Cafe"
        desc="Order a cup of coffee, team, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-4"
      />
    </div>
  );
};

export default Projects;
