import styles from "./ChatsUser.module.css";
import { Link } from "react-router-dom";

const ChatsUser = (props) => {
  return (
    <Link
      to={"/messages/" + props.name.replace(/\s+/g, "")}
      className={styles.chatsUser}
    >
      {props.name}
    </Link>
  );
};

export default ChatsUser;
