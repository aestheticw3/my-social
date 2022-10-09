import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Messages from "../Messages/Messages";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Routes>
          <Route
            path="/"
            element={<Profile profileData={props.state.profile} />}
          />
          <Route
            path="/messages/*"
            element={<Messages messagesData={props.state.messages} />}
          />
        </Routes>
      </div>
    </main>
  );
};
export default Main;
