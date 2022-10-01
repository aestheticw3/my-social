import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  return (
    <div className={styles.chatMessages}>
      <ChatMessage message="First message" />
      <ChatMessage message="Second message" />
      <ChatMessage message="Third message" />
      <ChatMessage message="Fourth message" />
    </div>
  );
};
export default ChatMessages;
