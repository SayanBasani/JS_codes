import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // for dropdowns, modals, etc.index
import { SlOptionsVertical } from "react-icons/sl";
function AppHeader() {
  return <header className="py-3 mb-3 border-bottom">
    <div
      className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "2fr 0.5fr" }}>
      {/* <div className="dropdown"></div> */}

      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input
            type="search"
            className="form-control widthPS"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

      </div>
      <div className="d-flex justify-content-center align-items-center border-2 border-black flex-shrink-0 dropdown">
        <a
          href="#"
          className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        >
          <i className="bi bi-person-circle fs-1"></i>
          {/* <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
          /> */}
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>

}
export default AppHeader;