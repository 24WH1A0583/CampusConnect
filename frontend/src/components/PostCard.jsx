function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px 0",
        borderRadius: "10px",
      }}
    >
      <h3>
        {post.author
          ? post.author.name
          : "Anonymous"}
      </h3>

      <p>{post.text}</p>

      <p>
        <strong>Posted On:</strong>{" "}
        {new Date(
          post.createdAt
        ).toLocaleString()}
      </p>
    </div>
  );
}

export default PostCard;