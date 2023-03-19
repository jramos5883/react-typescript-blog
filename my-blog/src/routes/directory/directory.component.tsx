import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import "./directory.styles.scss";
import Footer from "../../components/footer/footer.component";

const Directory = () => {
  return (
    <Fragment>
      <div className="dir-container">
        <div className="dir-links-container">
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
          <Link className="dir-link" to="signin">
            Sign In
          </Link>
        </div>
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Directory;
