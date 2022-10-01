import styles from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  return <div className={styles.chatMessage}>{props.message}</div>;
};
export default ChatMessage;
