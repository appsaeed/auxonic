export default function RecovrPassword() {
  return (
    <div>
      <div className="card" id="recoverform">
        <div className="card-body">
          <div className="logo">
            <h3>Recover Password</h3>
            <p className="text-muted fs-4">
              Enter your Email and instructions will be sent to you!
            </p>
          </div>
          <div className="mt-4 pt-4">
            {/* <!-- Form --> */}
            <form action="index.html">
              {/* <!-- email --> */}
              <div className="mb-4 pb-2">
                <div className="form-floating">
                  <input
                    className="form-control form-input-bg"
                    type="email"
                    placeholder="Email address"
                  />
                  <label htmlFor="tb-email">Email</label>
                </div>
              </div>
              <div className="d-flex align-items-stretch button-group">
                <button type="submit" className="btn btn-primary btn-lg px-4">
                  Submit
                </button>
                <a
                  href="#no"
                  id="to-login"
                  className="
                            btn btn-lg btn-light-secondary
                            text-secondary
                            font-weight-medium
                          "
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
