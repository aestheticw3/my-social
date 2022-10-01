import styles from "./ChatUsers.module.css";
import ChatsUser from "./ChatUser";

const ChatUsers = () => {
  let chatUsersData = [
    { name: "Guinevere Rogers" },
    { name: "Clarissa Leonard" },
    { name: "Dominic Cobbett" },
    { name: "Jade Frost" },
    { name: "Patricia Beck" },
    { name: "Perry Rose" },
    { name: "Sienna Carter" },
    { name: "Clara Wintringham" },
    { name: "Aiken Tate" },
    { name: "Lesley Stanley" },
    { name: "Jillian Hayward" },
  ];

  return (
    <aside className={styles.chatUsers}>
      <ChatsUser name="Guinevere Rogers" />
      <ChatsUser name="Clarissa Leonard" />
      <ChatsUser name="Dominic Cobbett" />
      <ChatsUser name="Jade Frost" />
      <ChatsUser name="Patricia Beck" />
      <ChatsUser name="Perry Rose" />
      <ChatsUser name="Sienna Carter" />
      <ChatsUser name="Clara Wintringham" />
      <ChatsUser name="Aiken Tate" />
      <ChatsUser name="Lesley Stanley" />
      <ChatsUser name="Jillian Hayward" />
    </aside>
  );
};

export default ChatUsers;
