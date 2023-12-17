import React from "react";
import UserMenu from "./UserMenu";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // handleLogout
  const handleLogout = () => {
    try {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      navigate("/login");
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };

  return (
    <>
      <div className="menu-h1">My Dashbord</div>
      <div className="dashbord-main">
        <div className="dashbord">
          <div className="dashbord-menu">
            <UserMenu />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={handleLogout}
              style={{
                cursor: "pointer",
                padding: "20px 50px",
                backgroundColor: "red",
                fontSize: "25px",
                borderRadius: "20px"
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
