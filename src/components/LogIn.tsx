import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LogIn = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setisLoggedIn] = useState(false)
  const [adminName, setAdminName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/admin/login", {
        admin_name: adminName,
        password: password,
      });

      console.log(response.data);
      if (response.data !== "Incorrect Password!") {
        navigate("/admin");
      } else {
        toast.error("Oops Incorrect adminName or password! Try again!");
      }
    } catch (e) {
      toast.error("Oops Incorrect adminName or password! Try again!");
    }

    // setisLoggedIn(true)
  };
  // const handleLogout = () => {
  //     setisLoggedIn(false)
  // }
  return (
    <div className="login-form-container">
      <form className="login">
        <div>Admin Login🦷✨</div>
        <div>
          <input
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            placeholder="admin name"
            autoComplete="admin"
          />{" "}
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            autoComplete="password"
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>

        {/* <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div> */}
      </form>
    </div>
  );
};

export default LogIn;