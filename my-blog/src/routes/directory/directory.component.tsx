import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { signOutUser, useAuth } from "../../utils/firebase/firebase.utils";

import "./directory.styles.scss";
import Footer from "../../components/footer/footer.component";

const Directory = () => {
  const user = useAuth();

  return (
    <Fragment>
      <div className="dir-container container-fluid">
        <div className="dir-links-container container-xxl">
          <Link className="dir-link active" to="/">
            Home
          </Link>
          <Link className="dir-link" to="posts">
            Blog
          </Link>
          <Link className="dir-link" to="about">
            About Me
          </Link>
          {user ? (
            <Fragment>
              <Link className="dir-link" to="createposts">
                Create Posts
              </Link>
              <Link className="dir-link" to="auth" onClick={signOutUser}>
                Sign Out
              </Link>
            </Fragment>
          ) : (
            <Link className="dir-link" to="auth">
              Sign In
            </Link>
          )}
        </div>
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Directory;
