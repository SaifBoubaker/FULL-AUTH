import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/UserSlice";

function Navbar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
  };

  const { userLoggedIn } = useSelector((state) => state.userAuth);

  return (
    <div style={{ backgroundColor: "green" }}>
      NAVBAR
      {userLoggedIn !== null && (
        <div>
          <button onClick={logoutHandler}>LOGOUT</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
