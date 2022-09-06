import styles from "./Posts.module.css";
import Post from "./Post";

function Posts() {
  return (
    <div className={styles.posts}>
      <h2 className={styles.title}>My Posts</h2>
      <textarea
        className={styles.textfield}
        placeholder="Your News..."
        type="text"
        autocapitalize="none"
        autocomplete="off"
        autocorrect="off"
        name="post-text"
        tabindex="0"
        spellcheck="false"
      ></textarea>
      <button className={styles.btn}>Send</button>
      <Post />
    </div>
  );
}

export default Posts;
