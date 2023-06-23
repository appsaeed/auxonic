import { Link } from "react-router-dom";

export default function AuthenticationButton() {
  return (
    <div className="row justify-content-center vh-100">
      <div className="col-md-3 col-sm-8 align-self-center">
        <Link to={"/login"} className="btn btn-primary w-100">
          Continue with Login
        </Link>
      </div>
    </div>
  );
}
