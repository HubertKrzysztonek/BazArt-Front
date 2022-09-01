import "./loginForm.css";
import RedirectButtons from "./redirectButtons";
import logo from "../images/signup-image.jpg";
import { motion } from "framer-motion";
const LoginForm = () => {
  return (
    // <>
    //   <RedirectButtons />
    //   <div className="container">
    //     <form>
    //       <h1>Login Form</h1>
    //       <div className="ui divider"></div>
    //       <div className="ui form">
    //         <div className="field">
    //           <label>Username</label>
    //           <input type="text" name="username" placeholder="Username" />
    //         </div>
    //         <div className="field">
    //           <label>Password</label>
    //           <input type="password" name="password" placeholder="Password" />
    //         </div>
    //         <button className="fluid ui button blue">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // </>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RedirectButtons />
      <div className="main-login-page">
        <section className="signup">
          <div className="sign-in-container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="sing-in-form-title">Sign up</h2>
                <form className="sign-form" id="register-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={logo} />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default LoginForm;
