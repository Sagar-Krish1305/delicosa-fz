import React from "react";

function Achievement({ title, value }) {
  return (
    <div>
      <div className="text-center">
        <div>
          <span className="border-b-2 ">{value}+</span>
        </div>
        <p className="w-52">{title}</p>
      </div>
    </div>
  );
}

export default Achievement;
