import React, { useState } from "react";
import loading from "./loading.gif";
import { useNavigate } from "react-router-dom";

const Spiner = () => {
  const navigate = useNavigate();
  const [count, setCount ] = useState(2);

  setTimeout(() => {
    const interval = setInterval(()=>{
      setCount((prevValue) => --prevValue);
    },1000);
    count === 0 && navigate('/login')
    return () => clearInterval(interval)
  }, [count, navigate]);

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
    </div>
  );
};

export default Spiner;
