import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">M-8</div>
      <ul className="nav-menue">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
