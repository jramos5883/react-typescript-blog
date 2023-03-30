import DisplayDBPosts from "../../components/displayDBPosts/displayDBPosts.component";
import "./posts.styles.scss";

const Posts: React.FC = () => {
  return (
    <div className="container-fluid posts-container">
      <div className="container-fluid posts-section">
        <DisplayDBPosts />
      </div>
{/* Going to comment out side bar until contact form and newsletter are made */}
      {/* <div className="container-fluid sidebar-section">
        <h1>Sidebar Section</h1>
      </div> */}
    </div>
  );
};

export default Posts;
