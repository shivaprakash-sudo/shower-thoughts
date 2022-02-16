import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="blog-list-title">{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blogs/${blog.id}`} className="blog-heading-link">
            <h3 className="blog-heading">{blog.title}</h3>
          </Link>
          <small className="blog-author">
            Posted by: &nbsp;
            {blog.author}
          </small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
