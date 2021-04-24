import React from "react";
import Project from "../components/Projects/Project";
import { ReactComponent as CoffeeSvg } from "../assets/images/coffee.svg";
import { ReactComponent as SportsSvg } from "../assets/images/sports.svg";
import { ReactComponent as EditorSvg } from "../assets/images/code-editor.svg";
import { ReactComponent as PortfolioSvg } from "../assets/images/portfolio.svg";
import { ReactComponent as DashboardSvg } from "../assets/images/dashboard.svg";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Project
        img={<PortfolioSvg />}
        title="Portolio"
        desc="Collection of current projects and contact information."
        languages={["ts", "react"]}
        color="proj-3"
      />
      <Project
        img={<EditorSvg />}
        title="Code Editor"
        desc="Import and update files in this amazing code editor behind an Auth0 authentication."
        languages={["ts", "react", "redux", "jest"]}
        color="proj-4"
      />
      <Project
        img={<DashboardSvg />}
        title="React Shopper"
        desc="Fullstack online shopping website with Stripe for easy purchasing."
        languages={["react", "node"]}
        color="proj-1"
      />
      <Project
        img={<CoffeeSvg />}
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["react", "reactrouter"]}
        color="proj-1"
      />
      <Project
        img={<SportsSvg />}
        title="Sports Blog"
        desc="Read up on all the current sporting events."
        languages={["html", "css"]}
        color="proj-2"
      />
    </div>
  );
};

export default Projects;
