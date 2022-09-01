import RedirectButtons from "./redirectButtons";
import "./registrationForm.css";
import logo from "../images/registerlogo.jpg";
import { motion } from "framer-motion";
const RegistrationForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="main-login-page">
        <RedirectButtons />

        <section className="sign-in">
          <div className="sign-in-container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={logo} alt="register logo" />
                </figure>
              </div>
              <div className="signin-form">
                <h2 className="sing-in-form-title">Sign up</h2>
                <form className="sign-form" id="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
