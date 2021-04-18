import { ReactComponent as CSSIcon } from "../../assets/images/css3.svg";
import { ReactComponent as HtmlIcon } from "../../assets/images/html5.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/images/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/images/redux.svg";
import { ReactComponent as NodeIcon } from "../../assets/images/nodejs.svg";
import { ReactComponent as JestIcon } from "../../assets/images/jest.svg";

const CodingLangList = () => {
  return (
    <div className="code-icon-container">
      <CSSIcon className="code-icon" />
      <HtmlIcon className="code-icon" />
      <JavascriptIcon className="code-icon" />
      <TypescriptIcon className="code-icon" />
      <ReactIcon className="code-icon" />
      <ReduxIcon className="code-icon" />
      <NodeIcon className="code-icon" />
      <JestIcon className="code-icon" />
    </div>
  );
};

export default CodingLangList;
