import React, { useState } from "react";
import css from "./signin.module.css";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const HandleChange = async (body) => {
    try {
      const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: body,
      };

      const req = await fetch("http://13.59.201.28/api/userLogin", options);
      const res = await req.json();
      alert(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  const Submit = () => {
    if (email !== "" && pass !== "") {
        const data = {email: email, password:pass};
        const body = JSON.stringify(data);
      HandleChange(body);
    } else {
      alert("please fill detail");
    }
  };

  return (
    <>
      <div className={css.signinParent}>
        <div className={css.signinimage}>
          <img
            src="./assets/cute-girl-works-laptop-hipster-cafe 1.png"
            alt="girl"
          />
        </div>
        <div className={css.signindetail}>
          <h2>Sign Up For Ride</h2>
          <div className={css.inpDiv}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={css.inpDiv}>
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className={css.chkBox}>
            <span>Forget password ?</span>
          </div>
          <div className={css.btnDiv}>
            <button onClick={Submit}>Log In</button>
          </div>
          <div className={css.alreadyreg}>
            Don't have an account ? <NavLink to="/">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
