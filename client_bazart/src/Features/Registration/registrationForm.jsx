import RedirectButtons from "./redirectButtons";
import "./registrationForm.css";
import logo from "../images/registerlogo.jpg";
const RegistrationForm = () => {
  return (
    <div class="main-login-page">
      {/* <RedirectButtons /> */}
      {/* <div className="container">
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
      </div> */}
      <RedirectButtons />
      <section class="sign-in">
        <div class="sign-in-container">
          <div class="signin-content">
            <div class="signin-image">
              <figure>
                <img src={logo} alt="sing up image" />
              </figure>
            </div>
            <div class="signin-form">
              <h2 class="sing-in-form-title">Sign up</h2>
              <form class="sign-form" id="login-form">
                <div class="form-group">
                  <input
                    type="text"
                    name="your_name"
                    id="your_name"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    class="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
