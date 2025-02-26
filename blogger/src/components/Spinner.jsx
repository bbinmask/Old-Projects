const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "60px 60px" }}
    >
      <div
        style={{ width: "5rem", height: "5rem" }}
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
