import styles from "./ChatsUser.module.css";

const ChatsUser = (props) => {
  return <div className={styles.chatsUser}>{props.name}</div>;
};

export default ChatsUser;
