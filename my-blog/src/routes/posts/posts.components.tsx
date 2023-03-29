import DisplayDBPosts from "../../components/displayDBPosts/displayDBPosts.component";
import "./posts.styles.scss";

const Posts: React.FC = () => {
  return (
    <div className="container-fluid posts-container">
      <div className="container-fluid posts-section">
        <DisplayDBPosts />
      </div>

      <div className="container-fluid sidebar-section">
        <h1>This is my Sidebar Section!</h1>
        <h2>Call To Action!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          accumsan porttitor nunc eget convallis. Nullam a ultricies lacus.
          Donec commodo tincidunt tortor sed ultrices. Phasellus condimentum
          dolor nec arcu fringilla sagittis. Proin et consequat lorem, in porta
          justo. Suspendisse varius dignissim maximus. In fermentum metus
          libero, a scelerisque libero rhoncus id. Sed pellentesque lacus odio,
          at facilisis lectus dapibus non. Phasellus at arcu sit amet orci
          hendrerit finibus. Fusce placerat bibendum mauris id tristique. In
          vitae dolor convallis, pretium sem nec, volutpat mauris.
        </p>
      </div>
    </div>
  );
};

export default Posts;
