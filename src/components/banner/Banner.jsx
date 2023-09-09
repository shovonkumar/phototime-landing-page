import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container text-white text-center">
        <h1 className="text-uppercase">
          your life <span>,</span> a photo
        </h1>
        <p>print your life in a simple photo</p>
        <button className="button">get started</button>

        <div className="social__icon d-flex align-items-center gap-3">
          <a href="#">
            <i className="fa-brands fa-twitter" title="Twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in" title="Linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-dribbble" title="Dribbble"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
