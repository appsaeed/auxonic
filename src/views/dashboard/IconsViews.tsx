import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { DotProgress } from "../../components/spinner/Spinner";
import { Children } from "../../types/global";
import { copyToClipboard } from "../../utils/clipboard";
import iconList from "../data/icons.json";
import Content from "../layout/Content";

export default function IconsViews() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    let timer: any;
    const _key = String(search).toLowerCase().trim();

    function searchIcons(data: string[], key: string): Promise<string[]> {
      return new Promise((resolve, reject) => {
        try {
          timer = setTimeout(() => {
            const find = data.filter((item) => item.includes(key));
            resolve(find);
          }, 100);
        } catch (error) {
          reject([]);
        }
      });
    }

    if (_key && _key.length > 1) {
      setLoading(true);
      searchIcons(iconList, _key)
        .then((items) => setIcons(items))
        .catch(() => setLoading(false))
        .finally(() => setLoading(false));
    }

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <Content title={"Quickly Search and Copy Material Icons to Clipboard"}>
      <div className="col-md-12">
        <h4 class="mb-4">
          Download or Import Fonts from Official Repository via{" "}
          <a
            href="https://github.com/appsaeed/auxonic/blob/main/src/assets/css/custom-fonts.css"
            target="_blank"
          >
            {" "}
            CSS Instructions
          </a>
        </h4>
        <div className="card">
          <div className="border-bottom title-part-padding">
            <h4 className="mb-0">
              <div className="icon-card-title row">
                <div className="col">
                  <input
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    type="text"
                    placeholder="Search icon"
                    className="form-control"
                    value={search}
                  />
                </div>
                <div className="col"></div>
                <div
                  className="col"
                  style={{ textAlign: "center", lineHeight: 2 }}
                >
                  Get many icons
                </div>
              </div>
            </h4>
          </div>
          <div className="card-body px-2">
            {loading && <DotProgress />}
            {/* {data} */}
            {icons.map((icon, i) => {
              return <Icon key={i} icon={icon} />;
            })}
          </div>
        </div>
      </div>
    </Content>
  );
}

type IconProps = JSX.HTMLAttributes<HTMLElement> & {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any;
};

const Icon = ({ icon, ...args }: IconProps) => {
  type TagnaeProps = {
    name?: string;
    className?: string;
    children?: Children;
  };
  const mySwal = withReactContent(Swal);
  const Tagname = ({ name, className, children }: TagnaeProps) => {
    return (
      <>
        <span className="tag-lg-then">&lt;</span>
        <span className="tags-name">{name}</span>
        <span className="tag-attr-name"> class</span>
        <span className="tag-attr-eql">=</span>
        <span className="tag-attr-value">"{className}"</span>
        <span className="tag-lg-then">&gt;</span>
        {children}
        <span className="tag-lg-then">&lt;/</span>
        <span className="tags-name">{name}</span>
        <span className="tag-lg-then">&gt;</span>
      </>
    );
  };
  const openPupup = () => {
    mySwal.fire({
      confirmButtonText: "Done",
      // showCloseButton: false,
      // showCancelButton: true,
      // focusConfirm: false,
      // confirmButtonAriaLabel: "Thumbs up, great!",
      // cancelButtonText: "cancel",
      // confirmButtonColor: "#1e4db7",
      // cancelButtonColor: "#d33",
      html: (
        <div className="code-show">
          <i
            onClick={(e) => {
              copyToClipboard(`<i className="${icon}"></i>`);
              e.currentTarget.className =
                "mdi mdi-content-copy fs-6 text-success";
            }}
            id="icon-copy"
            className="mdi mdi-content-copy fs-6"
          ></i>
          <pre className="code-wrapper">
            <Tagname name="i" className={icon}></Tagname>
          </pre>
        </div>
      ),
    });
  };

  return (
    <>
      <span
        onClick={openPupup}
        {...args}
        title={icon}
        className="btn btn-xl btn-light-info m-3 text-white"
      >
        <i className={icon + " fs-7"}></i>
      </span>
    </>
  );
};
