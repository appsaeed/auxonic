import { ReactNode, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { copyToClipboard } from "../../app/utils/clipboard";
import { DotProgress } from "../../components/spinner/Spinner";
import icons from "../data/data.json";
import Content from "../layout/Content";

export default function IconsViews() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setLoading(true);
    //initer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any = "";

    //search data
    const find = icons.data.filter((value) => value.includes(search));

    const list: JSX.Element[] = find.map((icon, i) => {
      return <Icon icon={icon} key={i} />;
    });
    //loop

    //set timer
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setData(list);
      setLoading(false);
    }, 1000);
  }, [search]);

  return (
    <Content title="">
      <div className="col-md-12">
        <div className="card">
          <div className="border-bottom title-part-padding">
            <h4 className="mb-0">
              <div className="icon-card-title d-flex px-2">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search icon"
                  className="form-control w-25"
                  value={search}
                />
                <span
                  className="w-75"
                  style={{ textAlign: "center", lineHeight: 2 }}
                >
                  Get many icons
                </span>
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

type IconProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any;
};

const Icon = ({ icon, ...args }: IconProps) => {
  type TagnaeProps = {
    name?: string;
    className?: string;
    children?: ReactNode;
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
