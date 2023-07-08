import { Link } from "react-router-dom";
import settings from "../../../app/settings";
import Footer from "../../../components/Footer";
import { Children } from "../../../types/global";
export default function Content({ children }: { children: Children }) {
  return (
    <div className="row justify-content-center vh-100">
      <Link to={"/"} style={{ marginLeft: "100px", marginTop: "40px" }}>
        <img src={settings.logo || ""} alt="" /> <span>{settings.name}</span>
      </Link>
      <div className="col-md-4 align-self-center">
        <div className="card sm-border-0">
          <div className="card-body">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
