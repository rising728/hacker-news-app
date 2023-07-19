import React from "react";

const Loader = ({ show, message = "Loading..." }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div>{message}</div>
          <progress className="progress w-56"></progress>
        </div>
      </div>
    </>
  );
};

export default Loader;
