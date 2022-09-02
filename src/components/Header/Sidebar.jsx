import "./Sidebar.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Sidebar() {
  return (
    <aside>
      <nav className="navbar">
        <a className="navbar__link" href="#">
          Profile
        </a>
        <a className="navbar__link" href="#">
          Messages
        </a>
        <a className="navbar__link" href="#">
          News
        </a>
        <a className="navbar__link" href="#">
          Music
        </a>
        <a className="navbar__link" href="#">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
