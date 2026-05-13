import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { IoShareSocialSharp, IoEarth } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className="p-4">
        <div className="row align-items-center">
          <div className="col-4 d-flex flex-column gap-2 justify-content-start">
            <h3 className={Styles.logo}>EventPro</h3>
            <p className={Styles.description} style={{ color: "#464555" }}> 
              © 2026 EventPro. Management. Professional Logistics Defined.
            </p>
          </div>
          <div
            className={`${Styles.links} col-4 d-flex gap-4 justify-content-center`}
          >
            <Link>Privacy Policy </Link>
            <Link>Terms of Service </Link>
            <Link>Support </Link>
            <Link>API Docs </Link>
          </div>
          <div className="col-4 d-flex gap-5 justify-content-end">
            <IoShareSocialSharp className={Styles.icon} />
            <IoEarth className={Styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
