export default function Message({ name, message, date, status, image }) {
  return (
    <>
      <a
        className="message-item d-flex align-items-center border-bottom px-3 py-2"
        id="chat_user_1"
        data-user-id="1"
      >
        <span className="user-img position-relative d-inline-block">
          <img
            src={"./assets/image/avatars/" + image + ".jpg"}
            alt={name}
            className="rounded-circle w-100"
          />
          <span className={"profile-status rounded-circle " + status}></span>
        </span>
        <div className="w-75 d-inline-block v-middle ps-3">
          <h5 className="message-title mb-0 mt-1">{name ? name : "name"}</h5>
          <span className="fs-2 text-nowrap d-block text-muted text-truncate">
            {message ? message : "empty"}
          </span>
          <span className="fs-2 text-nowrap d-block text-muted">
            {date ? date : "00: 00 AM"}
          </span>
        </div>
      </a>
    </>
  );
}
