import { useEffect } from "react";
import { Link } from "react-router-dom";
import settings from "../../app/settings";

export default function Nopage() {
  useEffect(() => {
    document.title = `404 not found - ${settings.name}`;
  });

  return (
    <>
      <div className="error-box">
        <div className="error-body text-center">
          <h1 className="error-title text-danger">404</h1>
          <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
          <p className="text-muted m-t-30 m-b-30">
            YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
          </p>
          <Link
            to={"/"}
            className="btn btn-danger btn-rounded waves-effect waves-light m-b-40 text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
