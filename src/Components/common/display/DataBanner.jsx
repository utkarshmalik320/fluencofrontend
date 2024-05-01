import React from "react";
import styles from "../../../Styles/DataBanner.module.css";
const DataBanner = () => {
  return (
    <>
   <div className={styles.container}>
        <div className={styles.divcontainer}>
          <div>
            <h2 className={styles.spantext}>
              <span className={styles.spantext}>
                500
              </span>
              +
            </h2>
            <p className={styles.paratext}>Brands Coupon Code.</p>
          </div>
          <div>
            <h2 className={styles.spantext}>
              <span className={styles.spantext}> 
                1000
              </span>
              +
            </h2>
            <p className={styles.paratext}>Influencers got paid collab.</p>
          </div> 

          <div>
            <h2 className={styles.spantext}>
              <span className={styles.spantext}>
                500,000
              </span>
              +
            </h2>
            <p className={styles.paratext}>Money Saved Till Data.</p>
          </div>

           <div>
            <h2 className={styles.spantext}>
              <span className={styles.spantext}>
                10,000
              </span>
              +
            </h2>
            <p className={styles.paratext}>Influencers created
                <br/> Account on Fluenco.</p>
          </div>
    
        </div>
    </div>
    </>
  );
};

export default DataBanner;
