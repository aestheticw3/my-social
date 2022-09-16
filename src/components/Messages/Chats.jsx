import styles from "./Chats.module.css";
import ChatsUser from "./ChatsUser";

const Chats = () => {
  return (
    <aside className={styles.chats}>
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

export default Chats;
