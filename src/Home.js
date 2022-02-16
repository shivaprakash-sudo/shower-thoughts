import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="container home">
      <div className="blogs">
        {error && <div className="txt-center">{error}</div>}
        {isPending && <div className="txt-loading txt-center">Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </div>
  );
};

export default Home;
