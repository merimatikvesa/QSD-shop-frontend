import styles from "./UserData.module.css";
import { VscHeart } from "react-icons/vsc";
import { GiDeliveryDrone } from "react-icons/gi";

const UserData = () => {
  return (
    <div>
      <div className={styles.CircleContainer}>
        <div className={styles.CircleItem}>
          <div className={styles.circle}>
            <VscHeart className={styles.HeartIcon}></VscHeart>
          </div>
          <p>Favorites</p>
        </div>
        <div className={styles.CircleItem}>
          <div className={styles.circle}>
            <GiDeliveryDrone className={styles.droneIcon}></GiDeliveryDrone>
          </div>
          <p>My Orders</p>
        </div>
      </div>

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
    </div>
  );
};
export default UserData;
