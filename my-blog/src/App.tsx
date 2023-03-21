import { Routes, Route } from "react-router-dom";

import Directory from "./routes/directory/directory.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Posts from "./routes/posts/posts.components";
import CreatePosts from "./routes/createPosts/createPosts.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Directory />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="createposts" element={<CreatePosts />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
