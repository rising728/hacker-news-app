import React from "react";

const Loader = ({ show, message = "Loading..." }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="text-center text-white">
          <div>{message}</div>
          <progress className="progress w-56"></progress>
        </div>
      </div>
    </>
  );
};

export default Loader;
