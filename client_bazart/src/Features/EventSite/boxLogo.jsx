import logo from "../images/logob.jpg";

const BoxLogo = () => {
  console.log(logo);
  return (
    <div id="box-logo" className="box-logo-div">
      <img id="logo" src={logo} alt="Logo" />
    </div>
  );
};

export default BoxLogo;
