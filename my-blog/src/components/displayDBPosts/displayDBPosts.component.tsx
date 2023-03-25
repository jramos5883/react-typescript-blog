import "./displayDBPosts.styles.scss";

import { usePosts } from "../../utils/firebase/firebase.utils";

const DisplayDBPosts = () => {
  const posts = usePosts();
  return (
    <div>
      <h2>Blog Section</h2>
      {posts.map((post, index) => (
        <div className='blogpost-container' key={index}>
          <h2 className='post-header'>{post.title}</h2>
          {post.image && <img className='image-edit' src={post.image} alt={post.title} />}
          <p className='publication-date'>{post.publicationDate.toLocaleString()}</p>
          <p className='content-section'>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayDBPosts;
