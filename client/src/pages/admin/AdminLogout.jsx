import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import AdminMenu from "./AdminMenu";

const AdminLogout = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth()

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
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
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
      </div>
    </>
  );
};

export default AdminLogout;
