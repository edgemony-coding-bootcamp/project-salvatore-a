import Homepage from "../../pages/Homepage";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";

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
