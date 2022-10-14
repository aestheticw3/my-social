import styles from "./ChatTextarea.module.css";

const ChatTextarea = () => {
  return (
    <textarea
      className={styles.textfield}
      placeholder="Your Message..."
      type="text"
      autocapitalize="none"
      autocomplete="off"
      autocorrect="off"
      name="message-text"
      tabindex="0"
      spellcheck="false"
    ></textarea>
  );
};
export default ChatTextarea;
