import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  spinner: false,
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPosts, action) => {
  let newPostList;
  switch (action.type) {
    case "ADD_POST":
      newPostList = [action.payload, ...currPosts];
      break;
    case "DELETE_POST":
      newPostList = currPosts.filter((post) => post.id !== action.payload.id);
      break;
    case "ADD_INITIAL_POSTS":
      newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setSpinner(false);
      });
  }, []);

  const addPost = (userId, title, body, tags, reactions) => {
    const confirm = window.confirm("Do you want to post?");
    if (confirm) {
      dispatchPostList({
        type: "ADD_POST",
        payload: {
          id: userId,
          title,
          body,
          tags: tags,
          reactions,
        },
      });
    }
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (id) => {
    const confirm = window.confirm("Do you want to delete");
    if (confirm) {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          id,
        },
      });
    }
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPosts, spinner }}
    >
      {" "}
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;

const initialPosts = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["america", "china", "india"],
    reactions: 229003,
  },
];
