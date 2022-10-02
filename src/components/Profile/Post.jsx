import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.logo}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
      />
      <p className={styles.text}>{props.text}</p>
      <div className={styles.likes}>{props.likes}</div>
    </div>
  );
};
export default Post;
