import { useState } from "react";

const PostAThought = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Shiva");
  return (
    <div className="post-a-thought txt-center">
      <h2 className="post-form-heading">Post a shower thought</h2>
      <form action="">
        <div className="blog-title-container">
          <label htmlFor="blog-title">Blog Title: </label>
          <input
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
          <label htmlFor="blog-body">Blog Title: </label>
          <textarea
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
