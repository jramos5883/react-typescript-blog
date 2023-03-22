import { useState } from "react";
import { addDoc } from "firebase/firestore";
import "./createPosts-form.styles.scss";

import { postCollectionRef } from "../../utils/firebase/firebase.utils";

export type ICreatePostForm = {
  title: string;
  image: string;
  content: string;
  publicationDate: string;
};

interface CreatePostFormProps {
  onAddPost: (newPost: ICreatePostForm) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPost: ICreatePostForm = {
      title,
      image,
      content,
      publicationDate: publishDate,
    };

    onAddPost(newPost);
    addDoc(postCollectionRef, {
      ...newPost,
    });
    console.log(newPost);

    // Clear form fields after submitting
    setTitle("");
    setImage("");
    setContent("");
    setPublishDate("");
  };

  // Working on getting my blog post object to be pushed into my firestore database

  return (
    <div>
      <form className="createPosts-form-container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          name="image"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />

        <label htmlFor="publishDate">Date Published:</label>
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          value={publishDate}
          onChange={(event) => setPublishDate(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
