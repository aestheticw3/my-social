import styles from "./Posts.module.css";
import Post from "./Post";

const Posts = () => {
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
      <Post
        message="i get these people are friends of the devs but jesus"
        likesCounter="12"
      />
      <Post
        message="9221 hours: bad game, there's no real late game content"
        likesCounter="321"
      />
      <Post
        message="i would have never guessed heap for this problem lol"
        likesCounter="21"
      />
      <Post message="but pooh, gotta be 1st to review it" likesCounter="1" />
      <Post
        message="i wonder if my friend's ex's game is for sale"
        likesCounter="11"
      />
      <Post message="speaking of" likesCounter="1" />
    </div>
  );
};
export default Posts;
