import Style from "./Navbar.module.css";
import Button from "../../Ui/Button/Button";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { MdAdminPanelSettings } from "react-icons/md";

function Navbar() {
  return (
    <nav className={`navbar row g-0 border-bottom ${Style.navbar}`}>
      <div className="col-3 d-flex align-items-center">
        <h1 className={`p-3 fs-3 ${Style.navh1}`}>Eevent Pro</h1>
        <div>
          <NavLink
            className={`p-3 fs-5 fw-normal text-decoration-none  ${Style.navlink}`}
            href="#"
          >
            Categories
          </NavLink>

          <NavLink
            className={`p-3 fs-5 fw-normal text-decoration-none  ${Style.navlink} ${Style.active}`}
            href="#"
          >
            Explore
          </NavLink>
        </div>
      </div>
      <div className="col-5">
        <Form className={`${Style.searchbar} d-flex`}>
          <Form.Control
            type="search"
            placeholder="Search"
            className={`me-2 rounded-pill gap-2 ms-4 me-auto ${Style.searchInput}`}
            aria-label="Search"
          />
          <Button
          type="submit"
            variant="outline-success"
            className={`${Style.searchBtn} rounded-pill gap-2`}
          >
            <FaSearch className={Style.icon} />
          </Button>
        </Form>
      </div>
      <div className="col-4">
        <div className="d-flex ms-auto gap-5 p-2 align-items-center justify-content-end">
          <div className="border-end pe-4 d-flex align-items-center gap-3">
            <Button to="/dashboard" className={`px-5 ${Style.SwitchBtn}`}>
              <MdAdminPanelSettings className={Style.icon} />
              Switch to Admin
            </Button>
          </div>
          <div className="d-flex gap-3">
            <Button className={`px-4 ${Style.btn}`}>Login</Button>
            <Button className={`px-4 ${Style.btn}`}>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
