import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sing Oout succesfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    
      
      <div className="h-screen bg-teal-100  flex items-center justify-center">
        <button
          className="bg-red-700 px-9 py-4 text-white rounded mr-4 hover:bg-red-600 transition-all duration-300"
          onClick={handleLogout}
        >Logout
        </button>
        <p className="text-2xl">
        if you want to return to the home <br />  page without logging out <Link to="/" className="underline"> click here </Link>
        </p>
      </div>
    
  );
};

export default Logout;
