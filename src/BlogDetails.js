import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog">
      {isPending && <div className="txt-center">Loading...</div>}
      {error && <div className="txt-center">{error}</div>}
      {blog && (
        <article className="blog-details m-auto">
          <h2 className="blog-heading txt-center">{blog.title}</h2>
          <small className="blog-author">
            Posted by:&nbsp;
            {blog.author}
          </small>
          <div className="blog-body">
            <p>{blog.body}</p>
          </div>
          {/* <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteBlog(blog.id);
            }}
          >
            Delete Blog
          </button> */}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
