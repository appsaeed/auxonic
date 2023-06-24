import { useEffect } from "react";
import { Link } from "react-router-dom";
import settings from "../../app/settings";

export default function Nopage() {
  useEffect(() => {
    document.title = `404 not found - ${settings.name}`;
  });
  return (
    <>
      <div className="row justify-content-center vh-100">
        <div className="col-md-4 align-self-center">
          <h1 className="text-center mb-4">404 not found</h1>
          <p className="text-muted mb-4 text-center">
            You see to be trying to find his way home
          </p>
          <div className="d-flex justify-content-center my-4">
            <Link to={"/"} type="button" className="btn btn-primary w-50">
              Go back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
