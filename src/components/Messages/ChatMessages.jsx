import React from "react";
import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";

const ChatMessages = (props) => {
  let chatMessagesElements = props.chatMessagesData.map((chatMessage) => (
    <ChatMessage message={chatMessage.message} />
  ));

  let messageText = React.createRef();

  return (
    <div className={styles.chatMessages}>
      {chatMessagesElements}
      <textarea
        ref={messageText}
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
      <button
        onClick={() => {
          props.sendMessage(messageText.current.value);
        }}
        className={styles.btn}
      >
        Send
      </button>
    </div>
  );
};
export default ChatMessages;
