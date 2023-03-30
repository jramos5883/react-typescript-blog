import "./about.styles.scss";
import headshot from "../../images/headshot.jpg";

const About = () => {
  return (
    <div>
      <h1 className="about-header">About Me</h1>
      <div className="about-container container-fluid">
        <div className="about-section container-fluid">
          <p className="indent">
            Hi, I'm John - a lifelong learner with a passion for science and
            technology. My early career as an EMT, Paramedic, and Firefighter
            Paramedic was driven by my love of science and the human body. But
            as I continued to explore the world of tech and programming, I found
            myself captivated by the endless possibilities for innovation and
            problem-solving. While I enjoyed the fast paced and hands-on work of
            emergency medicine, my true passion for tech was sparked by my
            introduction to coding. Now, as a software engineer, I bring a
            unique blend of analytical thinking and scientific curiosity to
            every project I work on.
          </p>
          <p className="indent">
            As a self-taught developer, I have embraced the challenges and
            rewards of learning code through trial and error and hands-on
            experience. With a strong focus on front-end development, I am
            constantly pushing myself to learn new skills and explore new
            technologies. Currently I am working on mastering React.js while
            also refining my knowledge of back-end development. My goal is to
            become a full-stack developer and bring my expertise to a dynamic
            team that values innovation and creativity.
          </p>
          <p className="indent">
            As I continue to grow and develop my skills as a software engineer,
            I am excited to bring my diverse background and strong work ethic to
            the tech industry. With my unique combination of medical expertise
            and technical skills, I am confident that I would be a valuable
            asset to any business looking for a passionate, knowledgeable, and
            adaptable team member.
          </p>
        </div>
        <div className="pic-section container-fluid">
          <img src={headshot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
