import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black">
      <div className="flex items-center justify-center absolute inset-0 mx-auto my-auto bg-black">
        <div className="loader"></div>
      </div>
    </div>
  );
}
