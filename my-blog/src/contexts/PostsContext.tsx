import React, { createContext, useContext, useState } from "react";
import { ICreatePostForm } from "../components/createPosts-form/createPosts-form.component";

interface PostsContextData {
  posts: ICreatePostForm[];
  addNewPost: (newPost: ICreatePostForm) => void;
}

const PostsContext = createContext<PostsContextData>({
  posts: [],
  addNewPost: () => {},
});

export const usePosts = () => {
  return useContext(PostsContext);
};

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<ICreatePostForm[]>([]);

  const addNewPost = (newPost: ICreatePostForm) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <PostsContext.Provider value={{ posts, addNewPost }}>
      {children}
    </PostsContext.Provider>
  );
};
