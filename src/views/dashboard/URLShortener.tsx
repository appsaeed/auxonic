//apps and root import
import { useState } from "preact/hooks";
import { toast } from "react-toastify";
import { DotProgress } from "../../components/spinner/Spinner";
import { usePreference } from "../../context/PreferenceContext";
import { extartError } from "../../utils/convert";
import Content from "../layout/Content";

export default function URLShortener() {
  const preference = usePreference();
  const [url, setUrl] = useState<string | undefined>("");
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [urls, setUrls] = useState<any[] | null>([]);

  const generateUrl = () => {
    setUrls(null);
    const fetchUrls = async () => {
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const data = await response.json();
        if (data.ok) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const arr: any[] = [];
          const resutls = data.result;
          for (const key in resutls) {
            // eslint-disable-next-line no-prototype-builtins
            if (resutls.hasOwnProperty(key)) {
              const name = key.replace(/(_)/g, " ");
              const value = resutls[key];
              arr.push({ name, value });
            }
          }
          setUrls(arr);
        }
      } catch (error) {
        setError(extartError(error));
      }
    };

    fetchUrls();
  };

  if (error) {
    toast.error(error);
  }

  return (
    <Content>
      <div className="col-md-8">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <h4 className="mb-0">
              <div className="icon-card-title row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.currentTarget.value)}
                    placeholder="Your url"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <button
                    onClick={generateUrl}
                    className="btn btn-primary w-100"
                  >
                    Create short url
                  </button>
                </div>
              </div>
            </h4>
          </div>
          <div className="card-body px-2">
            {!urls ? (
              <DotProgress />
            ) : (
              <>
                <table
                  className={`table table-striped table-bordered table-${preference.theme}`}
                >
                  <tbody>
                    {urls.map((item, key) => (
                      <tr key={key}>
                        <th scope="row">{item.name}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </Content>
  );
}
