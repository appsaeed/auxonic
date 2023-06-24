//apps and root import
import { useState } from "react";
import { toast } from "react-toastify";
import { copyToClipboard } from "../../utils/clipboard";
import { rgbToHex } from "../../utils/convert";
import Content from "../layout/Content";

export default function RGBtohex() {
  const [red, setRed] = useState<number | string>("");
  const [green, setGreen] = useState<number | string>("");
  const [blue, setBlue] = useState<number | string>("");
  const [hex, setHex] = useState<string>("");

  const generateUrl = () => {
    setHex(rgbToHex(red, green, blue));
  };

  return (
    <Content>
      <div className="col-md-8">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <form onSubmit={(e) => e.preventDefault()} className="row">
              <div className="form-group row col-md-9 m-0 p-0">
                <div className="col">
                  <label>Red</label>
                  <input
                    type="text"
                    name="red"
                    className="form-control py-1"
                    placeholder="Enter red"
                    value={red}
                    onChange={(e) => setRed(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label>Green</label>
                  <input
                    type="text"
                    name="green"
                    className="form-control py-1"
                    placeholder="Enter green"
                    value={green}
                    onChange={(e) => setGreen(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label>Blue</label>
                  <input
                    type="text"
                    name="blue"
                    className="form-control py-1"
                    placeholder="Enter blue"
                    value={blue}
                    onChange={(e) => setBlue(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="mb-1">Generate</div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-1"
                  onClick={generateUrl}
                >
                  Convert to hex
                </button>
              </div>
            </form>
          </div>
          <div className="card-body px-4">
            <span className="text-secoundry">
              {hex && (
                <div className="d-flex justify-content-between">
                  <input
                    type="text"
                    name="hex"
                    className="form-control w-50 me-2"
                    value={hex}
                    onChange={(e) => setHex(e.target.value)}
                  />
                  <input
                    type="color"
                    name="color"
                    className="form-control  me-2 h-auto"
                    value={hex}
                    onChange={(e) => setHex(e.target.value)}
                  />
                  <i
                    onClick={(e) => {
                      copyToClipboard(hex);
                      e.currentTarget.className =
                        "mdi mdi-content-copy fs-6 text-success btn";
                      toast.success("Copied to clipboard");
                    }}
                    className="mdi mdi-content-copy fs-6 btn"
                  ></i>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </Content>
  );
}
