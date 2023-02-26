import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "column",
        maxWidth: "80%",
        margin: "auto",
        gap: "2rem",
      }}
    >
      <h1>Sorry, the page you were looking for was not found</h1>
      <Link to="/">
        <button className="Btn" style={{ backgroundColor: "#161616" }}>
          Return to home
        </button>
      </Link>
    </div>
  );
};

export default Page404;
