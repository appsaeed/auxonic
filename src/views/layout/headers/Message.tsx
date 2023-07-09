import { HtmlAnchorType } from "../../../types/dom";

interface Props extends HtmlAnchorType {
  name?: string;
  image?: string | number;
  text?: string;
  status?: string;
  time?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Message({ image, status, time, ...rest }: Props) {
  return (
    <a
      className="message-item px-2 d-flex align-items-center border-bottom py-3"
      {...rest}
    >
      <span className="user-img position-relative d-inline-block">
        {/* <img
          src={"./assets/image/avatars/" + image + ".jpg"}
          alt="user"
          className="rounded-circle w-100"
        /> */}
        <span className={"profile-status rounded-circle " + status} />
      </span>
      <div className="w-75 d-inline-block v-middle ps-3 ms-1">
        <h5 className="message-title mb-0 mt-1 fs-4 font-weight-medium">
          Roman Joined the Team!
        </h5>
        <span className="fs-3 text-nowrap d-block time text-truncate fw-normal mt-1 text-muted">
          Congratulate him
        </span>
        <span className="fs-2 text-nowrap d-block subtext text-muted">
          {time ? time : "00:00 AM"}
        </span>
      </div>
    </a>
  );
}
