import React from "react";
import whatshapp from "../image/whatshapp.png";

const Whatshapp = () => {
  return (
    <div>
      <a href="https://wa.link/nx8t4d" target="_blank">
        <img
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            boxShadow: "0 0 4px 8px green",
            borderRadius: "50%",
          }}
          src={whatshapp}
          alt="whatshapp"
        />
      </a>
    </div>
  );
};

export default Whatshapp;
