import "./homePageTopComponentsStyle.scss";
import { ReactComponent as BazartLogo } from "../../assets/logo.svg";

const HomeTop = () => {
  return (
    <div className="slideShow">
      <div className="homeTopLogo">
        <BazartLogo className="bazart-logo" />
      </div>
    </div>
  );
};
export default HomeTop;
