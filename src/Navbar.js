const Navbar = () => {
  return (
    <nav className="container nav txt-center d-flex">
      <a className="page-heading-link" href="/">
        <h1>Shower Thoughts</h1>
      </a>
      <div className="links">
        <ul className="nav-list d-flex">
          <li className="nav-list--item">
            <a href="/">Home</a>
          </li>
          <li className="nav-list--item">
            <a href="/write_thought">Write a Thought</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
