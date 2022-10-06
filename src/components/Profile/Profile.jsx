import User from "./User";
import Posts from "./Posts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <User />
      <Posts postsData={props.postsData} />
    </div>
  );
};
export default Profile;
