import React, { useState } from "react";
import { ReactComponent as TypescriptIcon } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/images/redux.svg";

interface Props {
  img: string;
  title: string;
  desc: string;
  languages: string[];
  color: string;
  btn: string;
}

const Project = (props: Props) => {
  const { img, title, desc, languages, color, btn } = props;
  const [langs, setLangs] = useState(languages);

  return (
    <div className={`project ${color}`}>
      <div className="proj-image-container">
        <div className="proj-image">
          <img src="https://themewagon.com/wp-content/uploads/2018/07/Adventure_fet.jpg" />
        </div>
      </div>
      <div className="proj-title">{title}</div>
      <div className="proj-description">{desc}</div>
      <a className={`proj-button proj-button-${btn}`}>Proceed to website</a>
      <div className="proj-languages">
        {/* {languages} */}
        <TypescriptIcon className="code-icon" />
        <ReactIcon className="code-icon" />
        <ReduxIcon className="code-icon" />
      </div>
    </div>
  );
};

export default Project;
