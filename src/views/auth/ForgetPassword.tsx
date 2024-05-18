import { useState } from "preact/hooks";
import { toast } from "react-toastify";
import { FormBody } from "../../components/FormBody";
import Input from "../../components/Input";
import useTitle from "../../hooks/useTitle";
import { extartError } from "../../utils/convert";
import Content from "./layout/Content";

export default function ForgetPassword() {
  useTitle("Forget Password", true);
  const [email, setEmail] = useState("");
  const [mailError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<string | null | any>(null);

  if (error) {
    toast.error(extartError(error));
    setError(null);
  }

  return (
    <>
      <Content>
        <FormBody
          title="Forget password"
          sub_title="Enter Your email to forget password <br> or back to login "
          toText="Login"
          redirect="/login"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            label="Your Email"
            error="Enter a valid email address"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            required={mailError}
          />

          <div className={""}>
            <button type="submit" className="btn btn-primary w-100">
              Continue with email
            </button>
          </div>
        </FormBody>
      </Content>
    </>
  );
}
