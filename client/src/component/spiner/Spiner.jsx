import React, { useState } from "react";
import loading from "./loading.gif";
import { useLocation, useNavigate } from "react-router-dom";

const Spiner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount ] = useState(2);

  setTimeout(() => {
    const interval = setInterval(()=>{
      setCount((prevValue) => --prevValue);
    },1000);
    count === 0 && navigate('/login', {
      state: location.pathname,
    })
    return () => clearInterval(interval)
  }, [count, navigate, location]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30vh",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "150px" }} src={loading} alt="Loading..." />
      <h2>Plese Login For More Detalis</h2>
      <h3>{count} Second</h3>
    </div>
  );
};

export default Spiner;
