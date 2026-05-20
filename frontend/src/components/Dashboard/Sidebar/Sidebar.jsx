import styles from './Sidebar.module.css';
import { GrOverview } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className="d-flex flex-column flex-shrink-0 p-3">
        <div className="pb-3 mb-3">
            <span className={styles.sidebarLabel}>Event PRO</span>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">    
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <LuLayoutDashboard />
              <i className="bi bi-speedometer2 me-2"></i> Overview
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <MdEvent />
              <i className="bi bi-speedometer2 me-2"></i> 
              Manage Events
            </a>
          </li>
          <Link to="/dashboard/booking" className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <LuTicket />
              <i className="bi bi-speedometer2 me-2"></i> 
            Bookings 
           </a>
          </Link>
            <Link to="/dashboard/venues" className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <CiLocationOn />
              <i className="bi bi-speedometer2 me-2"></i> 
              Venues
            </a>
          </Link>
            <Link to="/dashboard/attendees" className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
             <LuUsers />
              <i className="bi bi-speedometer2 me-2"></i> 
              Attendees
            </a>
          </Link>
            <Link to="/dashboard/settings" className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <IoSettingsOutline />
              <i className="bi bi-speedometer2 me-2"></i> 
              Settings
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}