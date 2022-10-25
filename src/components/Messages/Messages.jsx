import ChatMessages from "./ChatMessages";
import ChatUsers from "./ChatUsers";
import styles from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <ChatUsers chatUsersData={props.messagesData.chatUsersData} />
      <ChatMessages
        chatMessagesData={props.messagesData.chatMessagesData}
        sendMessage={props.sendMessage}
      />
    </div>
  );
};

export default Messages;
