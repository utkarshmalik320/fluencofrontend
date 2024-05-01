import styles from "../../Styles/Brand.module.css";
import { Timeline } from "antd";
import React from "react";
import { Image } from "antd";

const BrandSection = () => {  
  return (

    <>
      <div className={styles.container}>
        <p className={styles.text}>
          Never shop before checking coupons on Fluenco
        </p>
        <div className={styles.timeline}>
          <Timeline
            items={[
              {
                children: (
                  <div>
                    <h3 className={styles.stepheadline}>
                      Step 1: "Discover Your Deal"{" "}
                    </h3>
                    <p className={styles.stepdecription}>
                      "Discover exclusive discount codes tailored for you. From{" "}
                      <br /> limited-time to seasonal offers, enhance your
                      shopping."
                    </p>
                  </div>
                ),
              },
              {
                children: (
                  <div>
                    <h3 className={styles.stepheadline}>
                      Step 2: "Apply with Ease"
                    </h3>
                    <p className={styles.stepdecription}>
                      "Apply your discount code at checkout for instant savings,{" "}
                      <br /> enhancing your shopping experience."
                    </p>
                  </div>
                ),
              },
              {
                children: (
                  <div>
                    <h3 className={styles.stepheadline}>
                      Step 3: "Enjoy Your Savings"
                    </h3>
                    <p className={styles.stepdecription}>
                      "Enjoy significant savings on your purchase. Treat
                      yourself to premium items <br /> with our discount codes.
                      Happy shopping!"
                    </p>
                  </div>
                ),
              },
            ]}
            itemClassName={styles.timelineItem} // Apply custom class to children
          />
        </div>
        <div className={styles.creatorcontainer}>
          <p className={styles.creatortext}>Top creators thrive with Fluenco</p>
          <div className={styles.imagediv}>
            <Image
              width={250}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              
            />
            <Image
              width={250}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={250}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={250}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSection;
