import api from "../services/api";
import "../css/Cards.css";

function PostCard({
  post,
  fetchPosts,
}) {
  const user = JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

  async function handleDelete() {
    try {
      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(
        `/posts/${post._id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchPosts();
    } catch (error) {
      console.log(error);
      alert(
        "Could not delete post."
      );
    }
  }

  return (
    <div className="card">
      <h3>
        👤{" "}
        {post.author
          ? post.author.name
          : "Anonymous"}
      </h3>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        {post.text}
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#718096",
          fontSize: "14px",
        }}
      >
        <strong>
          Posted On:
        </strong>{" "}
        📆{" "}
        {new Date(
          post.createdAt
        ).toLocaleString()}
      </p>

      {user &&
        post.author &&
        user._id ===
          post.author._id && (
          <button
            className="delete-btn"
            onClick={
              handleDelete
            }
          >
            🗑️ Delete Post
          </button>
        )}
    </div>
  );
}

export default PostCard;