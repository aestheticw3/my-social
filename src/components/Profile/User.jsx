import UserImage from "./UserImage";
import styles from "./User.module.css";
import Bio from "./Bio";

function User() {
  return (
    <div className={styles.user}>
      <UserImage />
      <Bio name="Aleksey Kostylev" />
    </div>
  );
}

export default User;
