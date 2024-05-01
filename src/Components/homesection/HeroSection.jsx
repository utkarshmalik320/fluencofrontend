import React from "react";
import styles from "../../Styles/HeroSection.module.css";
import boyimg from "/Images/F1.jpg";
import girlimg from "/Images/E1.jpg";
import leafimg from "/Images/leaf.svg";
import { Link } from "react-router-dom";
import BrandSection from "./BrandSection";


const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container2}>
          <img className={styles.avatar} src={boyimg} alt="img" />
          <img className={styles.avatar2} src={girlimg} alt="img" />
          <img className={styles.leafimg} src={leafimg} alt="leafimg" />
          <div className={styles.rectangle}>
            <div className={styles.jobcontainer}>
              {/* <img  className={styles.jobimg} src={job1} alt="jobimg" /> */}
              <p className={styles.text}></p>
              <p className={styles.salary}></p>
            </div>
            <div className={styles.jobcontainer2}>
              {/* <img  className={styles.jobimg} src={job1} alt="jobimg" /> */}
              <p className={styles.text}></p>
              <p className={styles.salary}></p>
            </div>
          </div>
        </div>
        <p className={styles.jobtext}>
        Coupon Code Journey: Unlock, <br/> Apply, Save!
        </p>
        <p className={styles.jobtextdesc}>
        Discover, Apply, and Enjoy exclusive discounts with our simple coupon code process.
        </p>
        <button className={styles.button2}>
          <Link
            to="/explore"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            Explore Now
          </Link>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
