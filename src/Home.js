import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Relaxing",
      body: "Est consequat do do nisi commodo eu...",
      author: "Shiva",
      id: 1,
    },
    {
      title: "So hot!",
      body: "Est consequat do do nisi commodo eu...",
      author: "Niketh",
      id: 2,
    },
    {
      title: "So cold!",
      body: "Est consequat do do nisi commodo eu...",
      author: "Sowmya",
      id: 3,
    },
  ]);

  const handleDeleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="container home">
      <div className="blogs">
        <BlogList
          blogs={blogs}
          title="All Blogs"
          handleDeleteBlog={handleDeleteBlog}
        />
      </div>
    </div>
  );
};

export default Home;
