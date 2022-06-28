import React from "react";
import { Link } from "react-router-dom";

const End = () => {
  return (
    <div className="end">
      <h2>Thank you for your time</h2>
      <Link to="/second">Finish</Link>
    </div>
  );
};

export default End;
