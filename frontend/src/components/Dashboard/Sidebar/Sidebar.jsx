import styles from './Sidebar.module.css';
import { GrOverview } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

export default function SideBar() {
  return (
    <aside>
      {/* 1. Changed class to className */}
      {/* 2. Changed style string to an object */}
      <div 
        className="d-flex flex-column flex-shrink-0 p-3 bg-light border-end" 
        style={{ width: '280px', height: '100vh' }}
      >
        <div className="sidebar-header pb-3 mb-3 border-bottom">
          <a href="/" className="d-flex align-items-center link-dark text-decoration-none">
            <span className="fs-5 fw-semibold ">Event PRO</span>
          </a>
        </div>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <small className="text-uppercase text-muted fw-bold mb-2 d-block ps-3">Nav Title</small>
          </li>
          
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
            <GrOverview />
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

          <li className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <LuTicket />

              <i className="bi bi-speedometer2 me-2"></i> 
            Bookings 
           </a>
          </li>

            <li className="nav-item">

            <a href="#" className="nav-link link-dark d-flex align-items-center">
            <FaLocationDot />
              <i className="bi bi-speedometer2 me-2"></i> 
              Venues
            </a>
          </li>


            <li className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
             <IoPeopleSharp />

              <i className="bi bi-speedometer2 me-2"></i> 
              Attendees
            </a>
          </li>


            <li className="nav-item">
            <a href="#" className="nav-link link-dark d-flex align-items-center">
              <IoSettings />

              <i className="bi bi-speedometer2 me-2"></i> 
              Settings
            </a>
          </li>

          
          
        </ul>

        <div className="dropdown border-top pt-3">
          <a 
            href="#" 
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" 
            id="dropdownUser2" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            {/* 3. Added closing slash to img tag */}
            <img 
              src="\src\assets\profile.png" 
              alt="User" 
              width="32" 
              height="32" 
              className="rounded-circle me-2" 
            />
            <strong>User</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            {/* 4. Added closing slash to hr tag */}
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}