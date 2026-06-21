function EventCard({ event }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "10px",
      }}
    >
      <h2>{event.title}</h2>

      <p>
        <strong>Description:</strong>{" "}
        {event.description}
      </p>

      <p>
        <strong>Location:</strong>{" "}
        {event.location}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(
          event.date
        ).toLocaleDateString()}
      </p>

      {event.createdBy && (
        <p>
          <strong>Created By:</strong>{" "}
          {event.createdBy.name}
        </p>
      )}
    </div>
  );
}

export default EventCard;