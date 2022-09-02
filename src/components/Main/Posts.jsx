import "./Posts.css";
import Post from "./Post";

function Posts() {
  return (
    <div className="profile__posts posts">
      <h2 className="posts__title">My Posts</h2>
      <textarea
        className="posts__textfield"
        placeholder="Your News..."
        type="text"
        autocapitalize="none"
        autocomplete="off"
        autocorrect="off"
        name="post-text"
        tabindex="0"
        spellcheck="false"
      ></textarea>
      <button className="posts__btn">Send</button>
      <Post />
    </div>
  );
}

export default Posts;
