import React from "react";
import Project from "../components/Projects/Project";
import { ReactComponent as CoffeeSvg } from "../assets/images/coffee.svg";
import { ReactComponent as SportsSvg } from "../assets/images/sports.svg";
import { ReactComponent as EditorSvg } from "../assets/images/code-editor.svg";
import { ReactComponent as PortfolioSvg } from "../assets/images/portfolio.svg";
import { ReactComponent as ShopperSvg } from "../assets/images/shopper.svg";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Project
        img={<PortfolioSvg />}
        site="https://admiring-blackwell-66f2f6.netlify.app"
        title="Portolio"
        desc="Collection of current projects and contact information."
        languages={["ts", "react"]}
        color="proj-3"
      />
      <Project
        img={<EditorSvg />}
        site="https://amazing-mirzakhani-878444.netlify.app/"
        title="Code Editor"
        desc="Import and update files with the language of your choice."
        languages={["ts", "react", "redux", "jest"]}
        color="proj-4"
      />
      <Project
        img={<ShopperSvg />}
        site="https://react-stripe-app.herokuapp.com/"
        title="React Shopper"
        desc="Fullstack online shopping website with Stripe for easy purchasing."
        languages={["react", "node", "reactrouter"]}
        color="proj-1"
      />
      <Project
        img={<CoffeeSvg />}
        site="https://fir-react-auth-dacbf.firebaseapp.com/login"
        title="Coffee Cafe"
        desc="Order a cup of coffee, tea, or grab a delicious pastry!"
        languages={["react", "reactrouter"]}
        color="proj-1"
      />
      <Project
        img={<SportsSvg />}
        site="https://kterry1.github.io/NewsGrid/"
        title="Sports Blog"
        desc="Read up on all the current sporting events."
        languages={["html", "css"]}
        color="proj-2"
      />
    </div>
  );
};

export default Projects;
