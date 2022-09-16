import styles from "./Chat.module.css";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatMessage message="First message" />
      <ChatMessage message="Second message" />
      <ChatMessage message="Third message" />
      <ChatMessage message="Fourth message" />
    </div>
  );
};
export default Chat;
