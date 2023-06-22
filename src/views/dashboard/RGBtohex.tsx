//apps and root import
import { useState } from "react";
import { toast } from "react-toastify";
import { copyToClipboard } from "../../app/utils/clipboard";
import Content from "../layout/Content";

export default function RGBtohex() {
  const [red, setRed] = useState<number | string>("");
  const [green, setGreen] = useState<number | string>("");
  const [blue, setBlue] = useState<number | string>("");
  const [hex, setHex] = useState<string>("");

  const generateUrl = () => {
    function rgbToHex(r: number, g: number, b: number) {
      return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }
    setHex(rgbToHex(Number(red), Number(green), Number(blue)).toUpperCase());
  };

  console.log(hex);
  return (
    <Content title="RGB to hex">
      <div className="col-md-8">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group d-flex justify-content-between">
                <div className="w-25 pe-4">
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
                <div className="w-25 pe-4">
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
                <div className="w-25 pe-4">
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
                <div className="w-25">
                  <div className="">Generate</div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-1"
                    onClick={generateUrl}
                  >
                    Convert to hex
                  </button>
                </div>
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
                    className="form-control w-25 me-2 h-auto"
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
