import { Link } from "react-router-dom";

export default function ForgetPssword({ url = "/forget-password" }) {
  return (
    <div className="ms-auto">
      <Link to={url} id="to-recover" className="fw-bold">
        Forgot Password?
      </Link>
    </div>
  );
}
