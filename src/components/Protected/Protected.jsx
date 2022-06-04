import Homepage from "../../pages/Homepage";
import Signin from "../../pages/Signin";

export default function Protected() {
  const isUserLogged = localStorage.getItem("currentUser") !== null;
  return <>{isUserLogged ? <Homepage /> : <Signin />}</>;
}
