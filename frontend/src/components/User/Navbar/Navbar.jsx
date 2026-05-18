import Style from "./Navbar.module.css";
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

      <div className="d-flex ms-auto gap-3 p-3 ">
        <button className={`btn btn-primary p-2 ${Style.btn}`}>Login</button>
        <button className={`btn btn-primary p-2  pe-3 ${Style.btn}`}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
