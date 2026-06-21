import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const recommendations = [];

  if (user?.interests?.includes("AI")) {
    recommendations.push("Google AI Internship");
  }

  if (user?.interests?.includes("Web Dev")) {
    recommendations.push("React Workshop Event");
  }

  if (user?.interests?.includes("DSA")) {
    recommendations.push("Join LeetCode Study Group");
  }

  return (
    <div>
      <Navbar />

      <h1>Welcome, {user?.name} 👋</h1>

      <h3>Branch: {user?.branch}</h3>

      <h3>Year: {user?.year}</h3>

      <h3>Interests:</h3>

      <ul>
        {user?.interests?.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>

      <hr />

      <h2>Quick Access</h2>

      <div>
        <Link to="/events">
          <button>Events</button>
        </Link>

        <Link to="/internships">
          <button>Internships</button>
        </Link>

        <Link to="/resources">
          <button>Resources</button>
        </Link>

        <Link to="/feed">
          <button>Community Feed</button>
        </Link>
      </div>

      <hr />

      <h2>🤖 Personalized Recommendations</h2>

      {recommendations.length === 0 ? (
        <p>
          Add interests during registration to get recommendations.
        </p>
      ) : (
        <ul>
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;