import { Outlet, Link } from "react-router-dom";

import "./directory.styles.scss";

const Directory = () => {
  return (
    <div>
      <h1>This is the Directory!</h1>
      <Link className="dir-link" to="/">
        Home
      </Link>
      <Link className="dir-link" to="about">
        About
      </Link>
      <Link className="dir-link" to="posts">
        Posts
      </Link>
      <Link className="dir-link" to="createposts">
        Create Posts
      </Link>
      <Outlet />
    </div>
  );
};

export default Directory;
