import styles from "./Navbar.module.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
  return (
    <aside>
      <nav className={styles.navbar}>
        <a className={`${styles.link} ${styles.active}`} href="#">
          Profile
        </a>
        <a className={styles.link} href="#">
          Messages
        </a>
        <a className={styles.link} href="#">
          News
        </a>
        <a className={styles.link} href="#">
          Music
        </a>
        <a className={styles.link} href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Navbar;
