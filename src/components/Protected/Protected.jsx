import {lazy} from "react";
const Homepage = lazy(()=>import("./../../pages/Homepage"))
const Signin = lazy(()=>import("./../../pages/Signin"))
const Signup = lazy(()=>import("./../../pages/Signup"))

export default function Protected({ redirect }) {
  const isUserLogged = localStorage.getItem("currentUser") !== null;
  return (
    <>
      {redirect === "Signin" ? (
        isUserLogged ? (
          <Homepage />
        ) : (
          <Signin />
        )
      ) : isUserLogged ? (
        <Homepage />
      ) : (
        <Signup />
      )}
    </>
  );
}
