function ResourceCard({
  resource,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "10px",
      }}
    >
      <h2>
        {resource.title}
      </h2>

      <p>
        <strong>
          Subject:
        </strong>{" "}
        {resource.subject}
      </p>

      <a
        href={resource.link}
        target="_blank"
        rel="noreferrer"
      >
        Open Resource
      </a>

      <br />
      <br />

      {resource.uploadedBy && (
        <p>
          <strong>
            Uploaded By:
          </strong>{" "}
          {
            resource
              .uploadedBy
              .name
          }
        </p>
      )}
    </div>
  );
}

export default ResourceCard;