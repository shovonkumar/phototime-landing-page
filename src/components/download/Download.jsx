import "./Download.css";

const Download = () => {
  return (
    <section className="download" id="download">
      <div className="container text-center">
        <h3 className="title">download it</h3>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="btn__wrapper d-flex align-items-center justify-content-center gap-4 mt-4">
          <a href="#" className="d-flex align-items-center">
            <span>apple store</span>
            <i className="fa-brands fa-apple"></i>
          </a>
          <a href="#" className="d-flex align-items-center">
            <span>play store</span>
            <i className="fa-brands fa-google-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
