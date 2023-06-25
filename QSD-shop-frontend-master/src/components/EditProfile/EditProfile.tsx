import styles from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <div>
      <p className={styles.heddingText}>
        Dear Elma, if you want to change your data locate the field that you
        want to change, and enter new value.
      </p>

      <div className={styles.InputsDiv}>
        <div className={styles.Inputtext}>
          <p>Full name:</p>
          <p>Email address:</p>
          <p>City</p>
          <p>Zip code:</p>
          <p>Address:</p>
        </div>

        <div className={styles.Inputs}>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </div>
      </div>
      <button className={styles.EditButton}>Edit Profile</button>
    </div>
  );
};
export default EditProfile;
