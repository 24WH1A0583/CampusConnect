import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        CampusConnect
      </h2>

      <div className="nav-links">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/events">
          Events
        </Link>

        <Link to="/internships">
          Internships
        </Link>

        <Link to="/resources">
          Resources
        </Link>

        <Link to="/feed">
          Feed
        </Link>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;