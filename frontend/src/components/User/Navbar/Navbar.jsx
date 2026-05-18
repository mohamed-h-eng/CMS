import Style from "./Navbar.module.css";
import Button from "../../Ui/Button/Button";
import { MdAdminPanelSettings } from "react-icons/md";

function Navbar() {
  return (
    <nav className={`navbar d-flex border-bottom ${Style.navbar}`}>
      <h1 className={`p-3 fs-3 ${Style.navh1}`}>Eevent Pro</h1>

      <a
        className={`p-3 fs-5 fw-normal text-decoration-none  ${Style.navlink}`}
        href="#"
      >
        Categories
      </a>

      <a
        className={`p-3 fs-5 fw-normal text-decoration-none  ${Style.navlink}`}
        href="#"
      >
        Explore
      </a>

      <div className="d-flex ms-auto gap-3 p-2 ">
        <Button to="/dashboard" className={`px-5 ${Style.SwitchBtn}`}>
          <MdAdminPanelSettings className={Style.icon} />
          Switch to Admin
        </Button>
        <r></r>
        <Button className={`px-4 ${Style.btn}`}>Login</Button>
        <Button className={`px-4 ${Style.btn}`}>Sign Up</Button>
        </div>
      </nav>
  );
}

export default Navbar;
