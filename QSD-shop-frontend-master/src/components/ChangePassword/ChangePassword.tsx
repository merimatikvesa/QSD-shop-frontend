import styles from "./ChangePassword.module.css";
const ChangePassword = () => {
  return (
    <div>
      <div className={styles.Inputs}>
        <input className={styles.Input} placeholder="Password"></input>
        <input className={styles.Input} placeholder="New Password"></input>
      </div>
      <button className={styles.ChangeButton}>Change password</button>
    </div>
  );
};
export default ChangePassword;
