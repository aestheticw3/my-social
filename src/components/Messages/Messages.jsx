import ChatMessages from "./ChatMessages";
import ChatUsers from "./ChatUsers";
import styles from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={styles.messages}>
      <ChatUsers chatUsersData={props.chatUsersData} />
      <ChatMessages chatMessagesData={props.chatMessagesData} />
    </div>
  );
};

export default Messages;
