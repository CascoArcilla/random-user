import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  function changeLogin() {
    setIsLogin(false);
  }

  function changeRegister() {
    setIsLogin(true);
  }

  const showLogin = isLogin == true ? <Login onChangeLog={changeLogin} /> : <Register onChangeReg={changeRegister} />;

  return (
    <>
      {showLogin}
    </>
  )
}