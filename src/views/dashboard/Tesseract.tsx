//apps and root import
import Content from "../layout/Content";

//hooks
import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { toast } from "react-toastify";
import Tesseract from "tesseract.js";
import { DotProgress } from "../../components/spinner/Spinner";

export default function Tesseracts() {
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useState("eng");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  if (error) {
    toast.error(error);
  }

  const imageTotext = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setLoading(true);
    setError(null);
    const Files = e.currentTarget.files as FileList;
    Tesseract.recognize(URL.createObjectURL(Files?.[0]), lang)
      .then(({ data: { text } }) => {
        setLoading(false);
        setContent(text);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.toString());
      });
  };

  const convertImage = () => {
    setLoading(true);
    setError(null);
    if (!url) {
      toast.error("The url is required");
      return false;
    }
    Tesseract.recognize(url, lang)
      .then(({ data: { text } }) => {
        setLoading(false);
        setContent(text);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err.toString());
      });
  };

  return (
    <Content>
      <div className="col-md-8">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <h4 className="mb-0">
              <div className="row">
                <div className="col">
                  <input
                    onChange={(e) => setUrl(e.currentTarget.value)}
                    type="url"
                    placeholder="Enter url"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <button
                    onClick={convertImage}
                    className="btn btn-primary w-100"
                  >
                    Convert
                  </button>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <select
                    className="form-select w-100"
                    onChange={(e) => setLang(e.currentTarget.value)}
                    defaultValue={"eng"}
                  >
                    <option value="eng">English</option>
                    <option value="ben">Bangla</option>
                    <option value="hin">Hindi</option>
                    <option value="urd">Urdu</option>
                  </select>
                </div>

                <div className="col">
                  <div className="btn btn-success btn-upload  w-100">
                    <input
                      type="file"
                      accept="image/*"
                      className="w-100"
                      onChange={(e) => imageTotext(e)}
                    />
                    upload
                  </div>
                </div>
              </div>
            </h4>
          </div>
          <div className="card-body px-2">
            {loading ? (
              <DotProgress />
            ) : (
              <div
                className="p-4 fs-6"
                contentEditable

                // suppressContentEditableWarning={true}
              >
                <pre>{content}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </Content>
  );
}
