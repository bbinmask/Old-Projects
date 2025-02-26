import React, { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  const handleDeleteClick = () => {
    deletePost(post.id);
  };

  return (
    <div className="card card-container" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title ">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => handleDeleteClick(post.id)}
            role="button"
          >
            Delete
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info hashtag">
            {tag}
          </span>
        ))}
        <div
          className="alert alert-success"
          role="alert"
          style={{ fontFamily: "cursive", margin: "10px 0px" }}
        >
          {`${post.reactions} people already liked your post`}
        </div>
      </div>
    </div>
  );
};

export default Post;
