/* eslint-disable react/prop-types */
const DesignItem = (props) => {
  return (
    <div>
      <h3 className="title">{props.title}</h3>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
        eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.{" "}
        <span>Ut enim ad minim</span> veniam, quis <br /> nostrud exercitation
        ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat.
      </p>
      <button className="button">Learn More</button>
    </div>
  );
};

export default DesignItem;
