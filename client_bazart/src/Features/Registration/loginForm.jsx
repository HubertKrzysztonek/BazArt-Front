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
        <section class="signup">
          <div class="sign-in-container">
            <div class="signup-content">
              <div class="signup-form">
                <h2 class="sing-in-form-title">Sign up</h2>
                <form class="sign-form" id="register-form">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>

                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      class="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div class="signup-image">
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
