import { useState } from "react";

const PostAThought = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Shiva");
  return (
    <div className="post-a-thought-container m-auto">
      <h2 className="post-form-heading txt-center">Post a shower thought</h2>
      <form className="form" action="">
        <div className="blog-title-container">
          <label className="d-block" htmlFor="blog-title">
            Blog Title:
          </label>
          <input
            id="blog-title"
            className="d-block"
            type="text"
            name="blog-title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="blog-body-container">
          <label className="d-block" htmlFor="blog-body">
            Blog Title:
          </label>
          <textarea
            id="blog-body"
            className="d-block"
            name="blog-body"
            required
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="author">
          <label htmlFor="author">Author: </label>
          <select
            name="author"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="Shiva">Shiva</option>
            <option value="Niketh">Niketh</option>
            <option value="Jay">Jay</option>
          </select>
        </div>
        <div className="btn-submit">
          <button className="btn btn-theme" type="submit">
            Post your thought
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostAThought;
