import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavOpt from './NavOptions';

function AppNav() {
  return <div className="gap-2 min-vh-100 navbody d-flex flex-column flex-wrap flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "250px" }}>
    <a
      href="#"
      className="pt-3 d-flex justify-content-center align-items-center fs-1 bi bi-list d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
    >
    </a>

    <br />
    <ul className="nav flex-column gap-2 mb-auto">
      <NavOpt></NavOpt>
    </ul>
  </div>
}

export default AppNav;