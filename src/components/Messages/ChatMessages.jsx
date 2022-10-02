import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  let chatMessagesDate = [
    { message: "First message" },
    { message: "Second message" },
    { message: "Third message" },
    { message: "Fourth message" },
  ];

  let chatMessagesElements = chatMessagesDate.map((chatMessage) => (
    <ChatMessage message={chatMessage.message} />
  ));

  return <div className={styles.chatMessages}>{chatMessagesElements}</div>;
};
export default ChatMessages;
