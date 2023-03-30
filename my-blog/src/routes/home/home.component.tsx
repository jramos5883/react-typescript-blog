import "./home.styles.scss";

import blogBanner from "../../images/blogBanner.jpg";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <h1 className="home-header">
        What does it take to make it into tech as a self-taught developer in
        2023?
      </h1>
      <img src={blogBanner} alt="" />
      <div className="container-fluid content-container">
        <p className="indent">
          Hello and welcome to my coding blog! In recent years, the tech
          industry has experienced exponential growth, creating countless
          opportunities and redefining the way we live, work, and interact with
          each other. As the demand for skilled developers continues to soar and
          innovative technologies emerge, I've set out to answer one question:
          What does it take to make it into tech as a self-taught developer in
          2023?
        </p>
        <p className="indent">
          In my quest to find the answer, my blog is devoted to narrating my
          unique coding journey, openly sharing the hurdles and victories I've
          faced as a self-taught developer. I'll provide a behind-the-scenes
          look at my programming process, highlighting the techniques and
          practices I've adopted to tackle various coding challenges. By
          displaying my current projects and past accomplishments, I aim to
          demonstrate my skills and progress in the field. This blog is a symbol
          of my persistent growth and steadfast devotion to excelling in the
          competitive world of technology.
        </p>
        <p className="indent">
          Throughout this journey, I am committed to documenting my ongoing
          pursuit of knowledge and mastery in programming, showcasing my
          determination to excel as a self-taught developer in this fast-paced
          tech world. Join me as I explore the world of software development,
          with the hopes of inspiring and empowering others who dream of making
          it in the tech industry. Let's learn, grow, and build amazing things
          together!
        </p>
      </div>
    </div>
  );
};

export default Home;
