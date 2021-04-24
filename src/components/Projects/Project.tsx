import React from "react";
import { ReactComponent as TypescriptIcon } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/images/redux.svg";
import { ReactComponent as ReactRouterSvg } from "../../assets/images/react-router.svg";
import { ReactComponent as JestIcon } from "../../assets/images/jest.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";
import { ReactComponent as NodeIcon } from "../../assets/images/nodejs.svg";
import { ReactComponent as CSSIcon } from "../../assets/images/css3.svg";
import { ReactComponent as HtmlIcon } from "../../assets/images/html5.svg";

interface Props {
  img: any;
  title: string;
  desc: string;
  languages: string[];
  color: string;
}

const Project = (props: Props) => {
  const { img, title, desc, languages, color } = props;

  const languageIcons: Record<string, React.ComponentType> = {
    react: ReactIcon,
    ts: TypescriptIcon,
    redux: ReduxIcon,
    jest: JestIcon,
    reactrouter: ReactRouterSvg,
    node: NodeIcon,
    css: CSSIcon,
    html: HtmlIcon,
  };

  return (
    <div className={`project ${color}`}>
      <div className="proj-image-container">
        <div className="proj-image">{img}</div>
      </div>
      <div className="proj-title">{title}</div>
      <div className="proj-description">{desc}</div>
      <a href="#" className={`proj-button`}>
        site <ArrowIcon />
      </a>
      <div className="proj-languages">
        {languages?.map((lang) => {
          const LanguageIcon = languageIcons[lang];
          return (
            <div key={lang} className="code-icon">
              <LanguageIcon />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
