import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import "../css/Pages.css";

function Feed() {
  const [posts, setPosts] =
    useState([]);

  const [text, setText] =
    useState("");

  async function fetchPosts() {
    try {
      const res =
        await api.get(
          "/posts"
        );

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function createPost() {
    try {
      if (
        text.trim() === ""
      ) {
        alert(
          "Please enter a post."
        );
        return;
      }

      const token =
        localStorage.getItem(
          "token"
        );

      await api.post(
        "/posts",
        {
          text,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setText("");

      fetchPosts();

      alert(
        "Post created successfully!"
      );
    } catch (error) {
      console.log(error);
      alert(
        "Could not create post."
      );
    }
  }

  return (
    <>
      <Navbar />

      <div className="page">
        <h1>
          Community Feed
        </h1>

        <div className="form-card">
          <h2>
            Create Post
          </h2>

          <textarea
            rows="5"
            placeholder="Share something with your campus..."
            value={text}
            onChange={(e) =>
              setText(
                e.target.value
              )
            }
          />

          <button
            onClick={
              createPost
            }
          >
            Post
          </button>
        </div>

        <h2 className="section-title">
          Recent Posts
        </h2>

        {posts.length ===
        0 ? (
          <p
            style={{
              textAlign:
                "center",
            }}
          >
            No posts yet.
          </p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              fetchPosts={fetchPosts}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Feed;