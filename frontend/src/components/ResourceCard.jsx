import api from "../services/api";
import "../css/Cards.css";

function ResourceCard({
  resource,
  fetchResources,
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
        `/resources/${resource._id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchResources();
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data
          ?.message ||
          "Could not delete resource."
      );
    }
  }

  return (
    <div className="card">
      <h2>
        📚 {resource.title}
      </h2>

      <p>
        <strong>
          Subject:
        </strong>{" "}
        {resource.subject}
      </p>

      <p>
        <a
          href={
            resource.link
          }
          target="_blank"
          rel="noreferrer"
        >
          🔗 Open Resource
        </a>
      </p>

      {resource.uploadedBy && (
        <p>
          <strong>
            Uploaded By:
          </strong>{" "}
          👤{" "}
          {
            resource
              .uploadedBy
              .name
          }
        </p>
      )}

      {user &&
        resource.uploadedBy &&
        user._id ===
          resource
            .uploadedBy
            ._id && (
          <button
            className="delete-btn"
            onClick={
              handleDelete
            }
          >
            🗑️ Delete Resource
          </button>
        )}
    </div>
  );
}

export default ResourceCard;