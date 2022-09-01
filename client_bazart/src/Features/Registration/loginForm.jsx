import "./loginForm.css";
import RedirectButtons from "./redirectButtons";
const LoginForm = () => {
  return (
    //     <div className="login-form-container">
    //       <form>
    //         <h1>Login form</h1>
    //         <div className="ui divider"></div>
    //         <div className="ui form">
    //           <div className="field">
    //             <label>Username</label>
    //             <input type="text" name="username" placeholder="Username"></input>
    //           </div>
    //           <div className="field">
    //             <label>Password</label>
    //             <input
    //               type="password"
    //               name="password"
    //               placeholder="Password"
    //             ></input>
    //           </div>
    //           <button className="fluid ui button blue">Submit</button>
    //         </div>
    //       </form>
    //     </div>
    //   );
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
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
