import ChatMessages from "./ChatMessages";
import ChatUsers from "./ChatUsers";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={styles.messages}>
      <ChatUsers />
      <ChatMessages />
    </div>
  );
};

export default Messages;
