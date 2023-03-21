import { useState } from "react";
import "./createPosts-form.styles.scss";

export type ICreatePostForm = {
  title: string;
  image: string;
  content: string;
  publicationDate: Date;
};

interface CreatePostFormProps {
  onAddPost: (newPost: ICreatePostForm) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPost: ICreatePostForm = {
      title,
      image,
      content,
      publicationDate: new Date(),
    };

    onAddPost(newPost);
    console.log(newPost);

    // Clear form fields after submitting
    setTitle("");
    setImage("");
    setContent("");
  };

  return (
    <div>
      <form className="createPosts-form-container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
