import { useState } from "react";
import { useHistory } from "react-router-dom";

const PostAThought = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Shiva");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog = {
      title,
      body,
      author
    }

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("New blog added!");
      setIsPending(false);
      history.push("/");
    })
  }

  return (
    <div className="post-a-thought-container m-auto">
      <h2 className="post-form-heading txt-center">Post a shower thought</h2>
      <form onSubmit={handleSubmit} className="form" action="">
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
            Blog Body:
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
          <input
            name="author"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div className="btn-submit txt-center">
          {isPending ? 
          (<button disabled className="btn" type="submit">
          Posting...
        </button>)
          :
          (<button className="btn" type="submit">
            Post your thought
          </button>)
}
        </div>
      </form>
    </div>
  );
};

export default PostAThought;
