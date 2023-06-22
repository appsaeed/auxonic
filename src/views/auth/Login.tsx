import FacebookLogin, {
  ProfileSuccessResponse,
} from "@greatsumini/react-facebook-login";
import {
  CredentialResponse,
  GoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserProps } from "../../api/AuthType";
import { useAuth } from "../../api/context/AuthContext";
import { extartError } from "../../app/utils/convert";
import FacebookLoginIframe from "../../components/FacebookLogin";
import ForgetPssword from "../../components/ForgetPassword";
import { FormBody } from "../../components/FormBody";
import HR from "../../components/HR";
import Input from "../../components/Input";
import Remember from "../../components/Remember";
import SubmitBtn from "../../components/Submitbtn";
import Content from "./layout/Content";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<string | null | any>(null);

  //auth uses

  //gogle logging level
  const handleOnsuccess = (data: CredentialResponse) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token: any = jwtDecode(data.credential || "{}");
    if (token) {
      const user: UserProps = {
        user_id: token.sub,
        name: token.name,
        email: token.email,
        picture: token.picture,
        authType: "google",
      };
      auth.onAuthLogin("google", user);
      navigate("/");
    } else {
      setError("Faild to login");
    }

    setError(null);
  };

  //facebook  login level
  const getFacebookProfile = (token: ProfileSuccessResponse) => {
    if (token) {
      const user: UserProps = {
        user_id: token.id || "",
        name: token.name || "",
        email: token.email || "",
        picture: token.picture?.data.url || "",
      };
      auth.onAuthLogin("facebook", user);
    } else {
      setError("Faild to login");
    }
    setError(null);
  };

  //google login level on tap
  useGoogleOneTapLogin({
    onSuccess: handleOnsuccess,
    onError: () => {
      setError("Error loging with google ");
    },
  });

  if (error) {
    toast.error(extartError(error));
    setError(null);
  }

  const btn_styles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "260px",
    height: "50px",
    outline: "none",
    borderRadius: "50px",
    background: "transparent",
    border: "none",
  };

  return (
    <>
      <Content>
        <FormBody onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            label="Your Email"
            error="Enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            type={"password"}
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex align-items-center mb-3">
            <Remember />
            <ForgetPssword />
          </div>

          <SubmitBtn />

          <HR />

          <div
            className="social-loging mt-2"
            style={{ width: "max-content", margin: "auto" }}
          >
            <GoogleLogin
              auto_select={false}
              width={btn_styles.width}
              shape={btn_styles?.borderRadius ? "circle" : "square"}
              onSuccess={handleOnsuccess}
            />

            <div className="my-2" style={{ position: "relative" }}>
              <FacebookLogin
                appId={""}
                // onSuccess={(response) => setFBResponse(response)}
                onFail={(error) => setError(error)}
                onProfileSuccess={getFacebookProfile}
                style={{
                  width: btn_styles.width,
                  height: btn_styles.height,
                  borderRadius: btn_styles.borderRadius,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                {" "}
              </FacebookLogin>
              <FacebookLoginIframe
                width={btn_styles.width}
                height={btn_styles.height}
                rounded={btn_styles?.borderRadius}
              />
            </div>

            {/* <a className="btn btn-lg btn-light-info text-info justify-content-center">
                <i className="ri-facebook-line fs-8"></i>
              </a> */}
          </div>
        </FormBody>
      </Content>
    </>
  );
}
