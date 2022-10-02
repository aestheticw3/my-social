import styles from "./Posts.module.css";
import Post from "./Post";

const Posts = () => {
  let postsData = [
    {
      text: "i get these people are friends of the devs but jesus",
      likes: 121,
    },
    {
      text: "9221 hours: bad game, there's no real late game content",
      likes: 12,
    },
    { text: "i would have never guessed heap for this problem lol", likes: 14 },
    { text: "but pooh, gotta be 1st to review it", likes: 14 },
    { text: "i wonder if my friend's ex's game is for sale", likes: 21 },
    { text: "speaking of", likes: 10 },
  ];

  let postsElements = postsData.map((post) => (
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
