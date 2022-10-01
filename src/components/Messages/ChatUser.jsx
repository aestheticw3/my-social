import styles from "./ChatUser.module.css";
import { Link } from "react-router-dom";

const ChatUser = (props) => {
  return (
    <Link
      to={"/messages/" + props.name.replace(/\s+/g, "")}
      className={styles.chatUser}
    >
      {props.name}
    </Link>
  );
};

export default ChatUser;
