import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container nav txt-center d-flex">
      <Link className="page-heading-link" to="/">
        <h1>Shower Thoughts</h1>
      </Link>
      <div className="links">
        <ul className="nav-list d-flex">
          <li className="nav-list--item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list--item">
            <Link to="/post_a_thought">Post a Thought</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
