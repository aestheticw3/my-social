import styles from "./Header.module.css";
import ProfileIcon from "./ProfileIcon";
import Navbar from "./Navbar";
import Search from "./Search";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Logo />
        <Search />
        <ProfileIcon />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
