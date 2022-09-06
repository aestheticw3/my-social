import styles from "./Main.module.css";
import Profile from "../Profile/Profile";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Profile />
      </div>
    </main>
  );
}

export default Main;
