import styles from "./Posts.module.css";
import Post from "./Post";

const Posts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post text={post.text} likes={post.likes} />
  ));

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
      {postsElements}
    </div>
  );
};
export default Posts;
