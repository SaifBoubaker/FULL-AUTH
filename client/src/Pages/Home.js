import React from "react";
import { useSelector } from "react-redux";

function Home(props) {
  //THIS IS FALSE// const { found } = useSelector((state) => state.userAuth.userLoggedIn);
  const { userAuth } = useSelector((state) => state);

  return (
    // THIS IS FALSE// <div>{found ? `Welcome${found?.name}` : "EveryOne"}</div>

    <div>
      {userAuth?.userLoggedIn?.found
        ? `Welcome ${userAuth?.userLoggedIn?.found.name}`
        : "Welcome EveryOne"}
    </div>
  );
}

export default Home;
