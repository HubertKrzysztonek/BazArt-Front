import "./Register.css";
import { useState } from "react";
const Register = () => {
  // fetch("https://apiendpoint.com/login", {
  //   method: "GET",
  //   credentials: "include",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Basic " + btoa(inst.user.email + ":" + inst.user.password),
  //   },
  // })
  //   .then(function (response) {
  //     if (response.status !== 200) {
  //       console.log(
  //         "Looks like there was a problem. Status Code: " + response.status
  //       );
  //       return;
  //     }
  //   })
  //   .catch(function (err) {
  //     console.log("Fetch Error :-S", err);
  //   });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function clickLogin() {
    console.warn(email, password);
    fetch("http://localhost:5120/api/authentication/login/Cookie", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
  return (
    <div>
      <div className="top-login">
        <div className="form-button">
          <div className="login-form-text">Masz już u nas konto ? </div>
          <br />
          <a className="login-button" href="/registertest">
            ZALOGUJ SIE!
          </a>
        </div>
        <div className="form-button">
          <div className="login-form-text">
            Jesteś artystą? Interesujesz się sztuką? A może wbijasz na zakupy?
          </div>
          <br />
          <a className="login-button" href="/login/register">
            ZAREJESTRUJ SIE !
          </a>
        </div>
      </div>
      <div className="bottom-login">
        <form className="login-form">
          <div className="email-input">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {/* <label for="email">Email</label> */}
          </div>
          <div className="password-input">
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* <label for="password">Password</label> */}
          </div>
          <button className="login-bttn" type="submit" onClick={clickLogin}>
            Zaloguj sie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
