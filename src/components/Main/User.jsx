import UserImage from "./UserImage";
import "./User.css";
import Bio from "./Bio";

function User() {
  return (
    <div className="user">
      <UserImage />
      <Bio />
    </div>
  );
}

export default User;
