import "./Header.css";
import ProfileIcon from "./ProfileIcon";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <Search />
        <ProfileIcon />
      </div>
      <Sidebar />
    </header>
  );
}

export default Header;
