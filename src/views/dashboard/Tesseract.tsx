//apps and root import
import { useState } from "react";
import Content from "../layout/Content";

//hooks
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

  const imageTotext = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setError(null);
    const Files = e.target.files as FileList;
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
    <Content title="">
      <div className="col-md-8">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <h4 className="mb-0">
              <div className="d-flex">
                <input
                  onChange={(e) => setUrl(e.target.value)}
                  type="url"
                  placeholder="Enter url"
                  className="form-control w-50 me-3"
                />
                <button onClick={convertImage} className="btn btn-primary w-50">
                  Convert
                </button>
              </div>
              <div className="d-flex mt-4">
                <select
                  className="form-select w-50 me-3"
                  onChange={(e) => setLang(e.target.value)}
                  defaultValue={"eng"}
                >
                  <option value="eng">English</option>
                  <option value="ben">Bangla</option>
                  <option value="hin">Hindi</option>
                  <option value="urd">Urdu</option>
                </select>

                <div className="btn btn-success btn-upload  w-50">
                  <input type="file" accept="image/*" onChange={imageTotext} />
                  upload
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
                suppressContentEditableWarning={true}
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
