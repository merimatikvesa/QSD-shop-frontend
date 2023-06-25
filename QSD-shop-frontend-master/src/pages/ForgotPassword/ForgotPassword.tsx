import React from "react";
import styles from "./ForgotPassword.module.css";
import forgotPassword from "../../images/forgotPassword.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = () => {
  return (
    <div className={styles.main}>
      <div className={styles.forgotPasswordMain}>
        <div className={styles.goBack}>
          <button>
            <FontAwesomeIcon
              className={styles.faarrowleft}
              icon={faArrowLeft}
            />
          </button>
        </div>
        <img src={forgotPassword} className={styles.image}></img>
        <div className={styles.userDetailField}>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className={styles.forgotPasswordButton}>
          <button>Send email</button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
