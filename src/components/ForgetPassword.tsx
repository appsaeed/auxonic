import { Link } from "react-router-dom";

export default function ForgetPssword() {
  return (
    <div className="ms-auto">
      <Link to={"forget-password"} id="to-recover" className="fw-bold">
        Forgot Password?
      </Link>
    </div>
  );
}
