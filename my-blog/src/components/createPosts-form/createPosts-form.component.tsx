import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./createPosts-form.styles.scss";

import {
  postCollectionRef,
  blogStorage,
} from "../../utils/firebase/firebase.utils";

export type ICreatePostForm = {
  title: string;
  image: string;
  content: string;
  publicationDate: string;
  imageUrl?: string;
};

interface CreatePostFormProps {
  onAddPost: (newPost: ICreatePostForm) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let imageUrl = "";

    if (file) {
      const blogStorageRef = ref(blogStorage, `blogImages/${file.name}`);
      const snapshot = await uploadBytes(blogStorageRef, file);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    const newPost: ICreatePostForm = {
      title,
      image: imageUrl,
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
    setFile(null);
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

        <label htmlFor="file">Upload Image:</label>
        <input type="file" id="file" onChange={handleFileChange} />

        <label htmlFor="publishDate">Date Published:</label>
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          value={publishDate}
          onChange={(event) => setPublishDate(event.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          rows={20}
          cols={50}
          name="content"
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
