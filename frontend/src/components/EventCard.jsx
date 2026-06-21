import api from "../services/api";
import "../css/Cards.css";

function EventCard({
  event,
  fetchEvents,
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
        `/events/${event._id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchEvents();
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data
          ?.message ||
          "Could not delete event."
      );
    }
  }

  return (
    <div className="card">
      <h2>📅 {event.title}</h2>

      <p>
        <strong>Description:</strong>{" "}
        {event.description}
      </p>

      <p>
        <strong>Location:</strong>{" "}
        📍 {event.location}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        📆{" "}
        {new Date(
          event.date
        ).toLocaleDateString()}
      </p>

      {event.createdBy && (
        <p>
          <strong>
            Created By:
          </strong>{" "}
          👤{" "}
          {event.createdBy.name}
        </p>
      )}

      {user &&
        event.createdBy &&
        user._id ===
          event.createdBy._id && (
          <button
            className="delete-btn"
            onClick={
              handleDelete
            }
          >
            🗑️ Delete Event
          </button>
        )}
    </div>
  );
}

export default EventCard;