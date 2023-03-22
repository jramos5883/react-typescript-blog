import "./displayDBPosts.styles.scss";

import { usePosts } from "../../utils/firebase/firebase.utils";

const DisplayDBPosts = () => {
  const posts = usePosts();
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          {post.image && <img src={post.image} alt={post.title} />}
          <p>{post.content}</p>
          <p>{post.publicationDate.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayDBPosts;
