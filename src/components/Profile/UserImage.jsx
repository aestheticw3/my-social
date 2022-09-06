import styles from "./UserImage.module.css";

function UserImage() {
  return (
    <img
      className={styles.logo}
      src="https://i.pinimg.com/originals/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
      alt="profile"
    />
  );
}

export default UserImage;
