import styles from "./ChatUsers.module.css";
import ChatsUser from "./ChatUser";

const ChatUsers = (props) => {
  let chatUsersElements = props.chatUsersData.map((chatUser) => (
    <ChatsUser name={chatUser.name} />
  ));

  return <aside className={styles.chatUsers}>{chatUsersElements}</aside>;
};

export default ChatUsers;
