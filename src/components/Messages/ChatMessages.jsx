import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";
import ChatTextarea from "./ChatTextarea";

const ChatMessages = (props) => {
  let chatMessagesElements = props.chatMessagesData.map((chatMessage) => (
    <ChatMessage message={chatMessage.message} />
  ));

  return (
    <div className={styles.chatMessages}>
      {chatMessagesElements}
      <ChatTextarea />
    </div>
  );
};
export default ChatMessages;
