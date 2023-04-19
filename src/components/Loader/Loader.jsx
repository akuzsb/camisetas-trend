import { Spinner } from "react-bootstrap";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export const Loader = () => {
  return (
    <div className="text-center" style={styles}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
