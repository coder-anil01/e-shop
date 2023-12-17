import React, { useState } from "react";
import UserMenu from "./UserMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth";

const MyAccount = () => {
  const [auth, setAuth] = useAuth();
  const user = auth.user;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [answer, setAnswer] = useState(user.answer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/auth/updated/${user._id}`,
        { name, email, password, phone, address, answer }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
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
          <div className="dashbord-contant">
            {/* PROFILE */}
            <div>
              <form className="form-group" onSubmit={handleSubmit}>
                <h1 className="form-heading">Account Update</h1>
                <label htmlFor="Name">Name:-</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                />
                <label htmlFor="Email">Email:-</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
                <label htmlFor="Password">Password Hit:-</label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  placeholder="Enter Password Hint"
                  required
                />
                <label htmlFor="Number">Number:-</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Number"
                  required
                />
                <label htmlFor="Address">Address:-</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Address"
                  required
                />
                <button type="submit" className="form-submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
