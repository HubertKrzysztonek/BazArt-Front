import RedirectButtons from "./redirectButtons";
import "./registrationForm.css";

const RegistrationForm = () => {
  return (
    <>
      <RedirectButtons />
      <div className="container">
        <form>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
