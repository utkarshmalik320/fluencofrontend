import React from "react";
import styles from "../../Styles/HeroSection.module.css";
import img1 from "../../../public/Images/Product.png";
import special from "../../../public/Images/special.png";
import img3 from "../../../public/Images/Coupon.png";
const HeroSection = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.subdiv}>
          <div className={styles.heading}>
            <p>Build your best <span className={styles.spantext} >community</span> starting from here.</p>
          </div>
          <div className={styles.desciption}>
            <p className={styles.text}>Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way</p>
            <div style={{display: "flex" , flexDirection:"row" , gap:"20px"}}>
            <button className={styles.button}>Get Started</button> 
            <p cl> Learn more </p> 
            </div>
          </div>
          
        </div>
        <div className={styles.subdivimg}>
          <img src={img1}alt="" />
          <img src={special}alt="" />
          <img src={img3}alt="" />
          
       </div>

          
       <div className={styles.textdiv}>
        <p className={styles.smallheading}>Here’s how it works</p>
        <p className={styles.titleheading}>What makes Karma so good?</p>
       </div>
    
      </div>


    </>
  );
};

export default HeroSection;
