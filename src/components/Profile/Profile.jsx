import User from "./User";
import Posts from "./Posts";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <User />
      <Posts />
    </div>
  );
}

export default Profile;
