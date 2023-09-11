import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h3 className="title">
          Rappresent your life with a <br /> simple photo
        </h3>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.{" "}
          <span>Ut enim ad minim</span> veniam, quis <br /> nostrud exercitation
          ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat.
        </p>
        <button className="button">get started</button>
      </div>
    </section>
  );
};

export default About;
