import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>{" | "}
      <Link to="/events">Events</Link>{" | "}
      <Link to="/internships">Internships</Link>{" | "}
      <Link to="/resources">Resources</Link>{" | "}
      <Link to="/feed">Feed</Link>{" | "}

      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;