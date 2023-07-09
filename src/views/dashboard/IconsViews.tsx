import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useMemo, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { DotProgress } from "../../components/spinner/Spinner";
import { Children } from "../../types/global";
import { copyToClipboard } from "../../utils/clipboard";
import icons from "../data/data.json";
import Content from "../layout/Content";

export default function IconsViews() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<JSX.Element[] | JSX.Element>([]);

  useMemo(() => {
    const keyword = search.toString().toLowerCase().trim();
    if (keyword !== "" && keyword.length >= 2) {
      setLoading(true);

      //search data
      const find = icons.data.filter((value) => value.includes(search));

      const list: JSX.Element[] = find.map((icon, i) => {
        return <Icon icon={icon} key={i} />;
      });
      setData(list);
      setLoading(false);
    } else {
      setData([]);
    }
  }, [search]);

  return (
    <Content>
      <div className="col-md-12">
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
            {data}
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
