import styles from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};
export default ChatMessage;
