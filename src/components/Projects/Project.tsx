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
}

const Project = (props: Props) => {
  const { img, title, desc, languages, color } = props;
  const [langs, setLangs] = useState(languages);

  return (
    <div className={`project ${color}`}>
      <div className="proj-image">{img}</div>
      <div className="proj-title">{title}</div>
      <div className="proj-description">{desc}</div>
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
