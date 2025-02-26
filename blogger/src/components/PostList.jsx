import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, spinner } = useContext(PostListContext);

  return (
    <div>
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </div>
  );
};

export default PostList;
