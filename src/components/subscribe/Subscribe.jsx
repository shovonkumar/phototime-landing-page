import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div
        className="container"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-ofset="0"
        data-aos-duration="1500"
        // data-aos-easing="ease-in-sine"
      >
        <h3 className="title">Subscribe to our community</h3>
        <form className="d-flex">
          <input type="email" placeholder="your email" required />
          <button type="submit">
            <i className="fa-solid fa-check"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
