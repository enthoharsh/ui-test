import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Css from "./nav.module.css";

const Nav = () => {
  const [toglebtn, setToglebtn] = useState(false)
  const [dis, setDis] = useState({})

    const toggleMenu = () => {
      if (!toglebtn) {
        setToglebtn(true)
        setTimeout(() => {
          
        setDis({ display:"flex" });
        }, 300);
      } else {
        setToglebtn(false);
        setTimeout(() => {
          
          setDis({ });
          }, 200);
      }
      
    }

    const linkRes = () => {
      setToglebtn(false);
      setDis({ });
    }

  return (
    <>
      <div className={Css.navBox} style={toglebtn ? {height:"100vh"} : {height:'4.8rem'}}>
        <span onClick={toggleMenu} className={Css.toggle}>{toglebtn ?
          'clear' :
        'menu'}
        </span>
        <div className={Css.navName}>
          <img src="./assets/comfort 1.png" alt="logo" />
        </div>
        <div className={Css.navLinks} style={dis}>
          <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">Home</NavLink>
          <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">AboutCTPD</NavLink>
          <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">Ride with us</NavLink>
          <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">Drive with us</NavLink>
          <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">Safety</NavLink>
        </div>
        <div className={Css.navSoc} style={dis}>
          <div className={Css.langDiv}>
          <img src="./assets/language 1.png" alt="test" />
          EN
          </div>
            <div>
              <span className={Css.nav_right_links}>
              <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/signin">Login</NavLink>
              </span>
            </div>
            <div>
              <span className={Css.nav_right_links}>
              <NavLink onClick={linkRes} exact activeClassName={Css.active} to="/">Signup</NavLink>
              </span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
