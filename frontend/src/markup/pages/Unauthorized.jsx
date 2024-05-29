import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50Vh",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
};

const contentStyle = {
  padding: "70px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  maxWidth: "900px",
};

const headingStyle = {
  color: "#ff5733",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const textStyle = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.6",
};

function Unauthorized() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Access Denied</h1>
        <p style={textStyle}>
          Sorry, you don't have the authorization to access the requested page.
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
