import React, { useState } from "react";
import { ReactComponent as TypescriptIcon } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/images/redux.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";

interface Props {
  img: any;
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
        <div className="proj-image">{img}</div>
      </div>
      <div className="proj-title">{title}</div>
      <div className="proj-description">{desc}</div>
      <a className={`proj-button proj-button-${btn}`}>
        site <ArrowIcon />
      </a>
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
