import React from "react";

const Loader = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div>Loading...</div>
          <progress className="progress w-56"></progress>
        </div>
      </div>
    </>
  );
};

export default Loader;
