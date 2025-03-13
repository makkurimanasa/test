import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let ref1 = useRef();
  let ref2 = useRef();

  let navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    ref1.current.value === "manasa" && ref2.current.value === "manasa@123"
      ? navigate("dashboard")
      : navigate("error");
  };
  return (
    <div>
      <form action="">
        name : <input type="text" name="" id="" ref={ref1} />
        <br />
        password : <input type="password" name="" id="" ref={ref2} />
        <br />
        <button onClick={login}>submit</button>
      </form>
    </div>
  );
};

export default Login;
