import UserImage from "./UserImage";
import styles from "./User.module.css";
import Bio from "./Bio";

function User() {
  return (
    <div className={styles.user}>
      <UserImage />
      <Bio />
    </div>
  );
}

export default User;
