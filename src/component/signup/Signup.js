import React,{useState} from "react";
import css from "./signup.module.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [Fullname, setFullname] = useState('');
    const [number, setNumber] = useState('');



  const HandleChange = async (body) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      };

      const req = await fetch("http://13.59.201.28/api/addUser", options);
      const res = await req.json();
      alert(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  const Submit = () => {
    if (email !== "" && pass !== "" && Fullname !== '' && number !== '' && cpass !== '') {
        if (pass !== cpass) {
            alert('password and confirm password should be same !!')
            return ;
        }
      const data = {
        email: email,
        fullName: Fullname,
        password: pass,
        countryCode: "+91",
        phoneNumber: number
      };
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
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className={css.inpDiv}>
            <input type="text" placeholder="Full Name" value={Fullname} onChange={(e) => setFullname(e.target.value)}/>
          </div>
          <div className={css.inpDiv}>
            <input type="tel" placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className={css.passDiv}>
            <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
            <input type="password" placeholder="Confirm password" value={cpass} onChange={(e) => setCpass(e.target.value)}/>
          </div>
          <div className={css.chkBox}>
            <input type="checkbox" /> <span>Terms & Conditions</span>
          </div>
          <div className={css.btnDiv}>
            <button onClick={Submit}>Sign Up</button>
          </div>
          <div className={css.alreadyreg}>
            Already have an account? <NavLink to="/signin">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
