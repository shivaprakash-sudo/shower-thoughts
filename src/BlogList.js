const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="blog-list-title">{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <a className="blog-heading-link" href="/">
            <h3 className="blog-heading">{blog.title}</h3>
          </a>
          {/* <p className="blog-body">{blog.body}</p> */}
          <strong className="blog-author">Author: </strong>
          <small>{blog.author}</small>
          {/* <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteBlog(blog.id);
            }}
          >
            Delete Blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
