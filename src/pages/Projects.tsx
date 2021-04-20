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
        img={<CoffeeSvg />}
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-1"
        btn="red"
      />
      <Project
        img={<SportsSvg />}
        title="Sudoku"
        desc="Rattle your brain with a fun sudoku game!"
        languages={["ts", "react", "redux"]}
        color="proj-2"
        btn="purple"
      />
      <Project
        img={<EditorSvg />}
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-4"
        btn="blue"
      />
      <Project
        img={<PortfolioSvg />}
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["ts", "react", "redux"]}
        color="proj-3"
        btn="orange"
      />
      <Project
        img={<DashboardSvg />}
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
