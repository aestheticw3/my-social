import User from "./User";
import Posts from "./Posts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <User />
      <Posts />
    </div>
  );
};
export default Profile;
