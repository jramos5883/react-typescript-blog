import React from "react";
import { ICreatePostForm } from "../../components/createPosts-form/createPosts-form.component";

interface DisplayPostsProps {
  posts: ICreatePostForm[];
}

const DisplayPosts: React.FC<DisplayPostsProps> = ({ posts }) => {
  const sortedPosts = [...posts].sort(
    (a, b) => b.publicationDate.getTime() - a.publicationDate.getTime()
  );

  return (
    <div>
      {sortedPosts.map((post, index) => (
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

export default DisplayPosts;
