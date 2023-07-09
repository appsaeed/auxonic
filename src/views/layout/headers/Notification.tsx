import { Children } from "../../../types/global";

type Props = {
  image?: string;
  icon?: Children;
};

export default function Notification({ image, icon }: Props) {
  return (
    <a
      href="#"
      className="message-item px-2 d-flex align-items-center border-bottom py-3"
    >
      {image ? (
        <>
          <span className="user-img position-relative d-inline-block">
            <img src={image} alt={""} className="rounded-circle w-100" />
          </span>
        </>
      ) : (
        <>
          <span className="btn btn-light-info text-info btn-circle">
            {icon ? icon : <i data-feather="image"></i>}
          </span>
        </>
      )}
      <div className="w-75 d-inline-block v-middle ps-3 ms-1">
        <h5 className="message-title mb-0 mt-1 fs-4 font-weight-medium">
          Roman Joined the Team!
        </h5>
        <span className="fs-3 text-nowrap d-block time text-truncate fw-normal mt-1 text-muted">
          Demo name
        </span>
      </div>
    </a>
  );
}
