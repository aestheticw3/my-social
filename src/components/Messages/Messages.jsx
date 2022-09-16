import Chat from "./Chat";
import Chats from "./Chats";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={styles.messages}>
      <Chats />
      <Chat />
    </div>
  );
};

export default Messages;
