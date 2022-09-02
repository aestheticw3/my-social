import "./Post.css";
function Post() {
  return (
    <div className="post">
      <img
        className="post__profile-image"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
      />
      <p className="post__text">BlaBlaBla</p>
    </div>
  );
}

export default Post;
