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

  let chatUsersElements = chatUsersData.map((chatUser) => (
    <ChatsUser name={chatUser.name} />
  ));

  return <aside className={styles.chatUsers}>{chatUsersElements}</aside>;
};

export default ChatUsers;
