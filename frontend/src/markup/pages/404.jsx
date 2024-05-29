const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
  backgroundColor: "#f0f0f0",
};

const headingStyle = {
  fontSize: "2em",
  color: "#333",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontSize: "1.2em",
  color: "#555",
  textAlign: "center",
};

const NotFound = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>404 Not Found</h1>
    <p style={paragraphStyle}>
      Sorry, the page you are looking for couldn't be found.
    </p>
  </div>
);

export default NotFound;
