import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/Slices/UserSlice";

function AllUsers(props) {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userAuth);
  const { userAuth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      All Users:
      {userAuth?.userLoggedIn?.found
        ? allUsers?.map((el) => <p> {el.name} </p>)
        : "You need to Login first to see our customers"}
    </div>
  );
}

export default AllUsers;
