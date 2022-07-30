import React from 'react';
import css from './footer.module.css'

const Footer = () => {
  return (
    <div className={css.footParent}>
        <div className={css.footlinks}>
        <img src="./assets/comfort 1.png" alt="logo" />
        <ul>
            <li>About us</li>
            <li>press</li>
            <li>Career</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className={css.footinput}>
            <h4>Sign up for newsletter</h4>
            <input type='text' placeholder='Enter Your Email' />
        </div>
    </div>
  )
}

export default Footer