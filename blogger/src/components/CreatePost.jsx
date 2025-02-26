import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = ({ setSelectedIcon }) => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  const handleSubmitClick = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;
    if (!userId || !title || !body) {
      alert("Please fill out all required fields.");
    } else {
      addPost(userId, title, body, tags, reactions);
      setSelectedIcon("Home");

      userIdElement.current.value = "";
      titleElement.current.value = "";
      bodyElement.current.value = "";
      tagsElement.current.value = "";
      reactionsElement.current.value = "";
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitClick}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control form-inputs"
          placeholder="Enter your User Id here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control form-inputs"
          id="exampleFormControlInput1"
          placeholder="Enter your title here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          ref={bodyElement}
          className="form-control form-inputs"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write down your post here"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control form-inputs"
          id="exampleFormControlInput1"
          placeholder="Enter tags using space"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionsElement}
          type="number"
          className="form-control form-inputs"
          id="exampleFormControlInput1"
          placeholder="How many people liked your post"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
