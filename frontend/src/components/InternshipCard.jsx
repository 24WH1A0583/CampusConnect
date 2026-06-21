function InternshipCard({
  internship,
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
        {internship.company}
      </h2>

      <h3>
        {internship.role}
      </h3>

      <p>
        <strong>
          Deadline:
        </strong>{" "}
        {new Date(
          internship.deadline
        ).toLocaleDateString()}
      </p>

      <a
        href={
          internship.link
        }
        target="_blank"
        rel="noreferrer"
      >
        Apply Here
      </a>

      <br />
      <br />

      {internship.postedBy && (
        <p>
          <strong>
            Posted By:
          </strong>{" "}
          {
            internship
              .postedBy
              .name
          }
        </p>
      )}
    </div>
  );
}

export default InternshipCard;