import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={`${styles.link} ${styles.active}`}>
        Profile
      </Link>
      <Link to="/messages" className={styles.link}>
        Messages
      </Link>
      <Link to="/" className={styles.link}>
        News
      </Link>
      <Link to="/" className={styles.link}>
        Music
      </Link>
      <Link to="/" className={styles.link}>
        Settings
      </Link>
    </nav>
  );
};

export default Navbar;
