import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const recommendations = [];

  if (
    user?.interests?.includes("AI")
  ) {
    recommendations.push(
      "Google AI Internship"
    );
  }

  if (
    user?.interests?.includes(
      "Web Dev"
    )
  ) {
    recommendations.push(
      "React Workshop Event"
    );
  }

  if (
    user?.interests?.includes(
      "DSA"
    )
  ) {
    recommendations.push(
      "Join LeetCode Study Group"
    );
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="welcome-card">
          <h1>
            Welcome, {user?.name}!!
          </h1>

          <h3>
            Branch: {user?.branch}
          </h3>

          <h3>
            Year: {user?.year}
          </h3>

          <div className="interests">
            <h3>Interests:</h3>

            <ul>
              {user?.interests?.map(
                (
                  interest,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {interest}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <h2>
          Quick Access
        </h2>

        <div className="dashboard-grid">
          <Link to="/events">
            <div className="dashboard-box">
              <h2>
                📅 Events
              </h2>
            </div>
          </Link>

          <Link to="/internships">
            <div className="dashboard-box">
              <h2>
                💼 Internships
              </h2>
            </div>
          </Link>

          <Link to="/resources">
            <div className="dashboard-box">
              <h2>
                📚 Resources
              </h2>
            </div>
          </Link>

          <Link to="/feed">
            <div className="dashboard-box">
              <h2>
                💬 Community Feed
              </h2>
            </div>
          </Link>
        </div>

        <div className="recommendations">
          <h2>
            🤖 Personalized
            Recommendations
          </h2>

          {recommendations.length ===
          0 ? (
            <p>
              Add interests
              during
              registration to
              get
              recommendations.
            </p>
          ) : (
            <ul>
              {recommendations.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;