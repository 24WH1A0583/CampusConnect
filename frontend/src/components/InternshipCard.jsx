import api from "../services/api";
import "../css/Cards.css";

function InternshipCard({
  internship,
  fetchInternships,
}) {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  async function handleDelete() {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(
        `/internships/${internship._id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchInternships();
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data
          ?.message ||
          "Could not delete internship."
      );
    }
  }

  return (
    <div className="card">
      <h2>
        💼{" "}
        {internship.company}
      </h2>

      <p>
        <strong>
          Role:
        </strong>{" "}
        {internship.role}
      </p>

      <p>
        <strong>
          Deadline:
        </strong>{" "}
        📆{" "}
        {new Date(
          internship.deadline
        ).toLocaleDateString()}
      </p>

      <p>
        <a
          href={
            internship.link
          }
          target="_blank"
          rel="noreferrer"
        >
          🔗 Apply Here
        </a>
      </p>

      {internship.postedBy && (
        <p>
          <strong>
            Posted By:
          </strong>{" "}
          👤{" "}
          {
            internship
              .postedBy
              .name
          }
        </p>
      )}

      {user &&
        internship.postedBy &&
        user._id ===
          internship.postedBy
            ._id && (
          <button
            className="delete-btn"
            onClick={
              handleDelete
            }
          >
            🗑️ Delete Internship
          </button>
        )}
    </div>
  );
}

export default InternshipCard;