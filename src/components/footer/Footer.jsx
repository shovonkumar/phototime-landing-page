import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-center justify-content-sm-between align-items-center">
        <div className="footer__left text-center text-sm-start">
          <div className="links d-flex mb-3">
            <a href="#">credits</a>
            <a href="#">privacy</a>
            <a href="#">our teams</a>
          </div>
          <p>
            Made by <span>Shovon Kumar</span>
          </p>
        </div>
        <div className="footer__right d-none d-sm-block">
          <img src="/images/logo-blue.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
