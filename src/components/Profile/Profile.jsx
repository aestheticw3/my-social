import User from "./User";
import Posts from "./Posts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <User />
      <Posts
        postsData={props.profileData.postsData}
        addPost={props.addPost}
        newPostText={props.profileData.newPostText}
      />
    </div>
  );
};
export default Profile;
