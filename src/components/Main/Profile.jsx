import User from "./User";
import Posts from "./Posts";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <User />
      <Posts />
    </div>
  );
}

export default Profile;
