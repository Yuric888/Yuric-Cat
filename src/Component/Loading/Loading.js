import LogoLoading from "../Images_Svg/LogoLoading";
import "./Loading.css";
const Loading = ({ children }) => {
  return (
    <div className="wrapper-loading">
      <div className="container-loading">
        <LogoLoading />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Loading;
