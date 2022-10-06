import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";

const ChatMessages = (props) => {
  let chatMessagesElements = props.chatMessagesData.map((chatMessage) => (
    <ChatMessage message={chatMessage.message} />
  ));

  return <div className={styles.chatMessages}>{chatMessagesElements}</div>;
};
export default ChatMessages;
