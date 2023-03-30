import React from "react";
import CreatePostForm from "../../components/createPosts-form/createPosts-form.component";
import { usePosts } from "../../contexts/PostsContext";
import "./createPosts.styles.scss";

const CreatePosts: React.FC = () => {
  const { addNewPost } = usePosts();

  return (
    <div className="createPosts-container">
      <h1 className='posts-header'>Create Post</h1>
      <CreatePostForm onAddPost={addNewPost} />
    </div>
  );
};

export default CreatePosts;
