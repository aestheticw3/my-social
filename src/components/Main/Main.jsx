import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Profile postsData={props.postsData} />} />
          <Route
            path="/messages/*"
            element={
              <Messages
                chatUsersData={props.chatUsersData}
                chatMessagesData={props.chatMessagesData}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
};
export default Main;
