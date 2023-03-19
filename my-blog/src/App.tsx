import { Routes, Route } from "react-router-dom";

import Directory from "./routes/directory/directory.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Posts from "./routes/posts/posts.components";
import CreatePosts from "./routes/createPosts/createPosts.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Directory />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="createposts" element={<CreatePosts />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
