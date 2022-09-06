import styles from "./Post.module.css";
function Post() {
  return (
    <div className={styles.post}>
      <img
        className={styles.logo}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
      />
      <p className={styles.text}>BlaBlaBla</p>
    </div>
  );
}

export default Post;
