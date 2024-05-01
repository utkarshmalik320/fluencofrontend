import React from 'react'
import logo from '/Images/logo.svg'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Footer.module.css'
const Footer = () => {
  return (
    <>
     <div className={styles.footer}>
        <div className={styles.footercontent}>
          <img src={logo} alt="Company Logo" />
        </div>

        <div className={styles.footerlinks}>
          <h4 style={{color:"white"}}>Main Heading</h4>
          <ul className={styles.uldiv}>
            <li>
              <Link style={{color:"white" , textDecoration : "none"}}  to="/home">Home</Link>
            </li>
            <li>
              <Link style={{color:"white" , textDecoration : "none"}}  to="/influencer">Creator</Link>
            </li>
            <li>
              <Link style={{color:"white" , textDecoration : "none"}}  to="/coupon">Coupons</Link>
            </li>
            <li>
              <Link style={{color:"white" , textDecoration : "none"}}  to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
