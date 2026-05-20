import SideBar from '../../components/Dashboard/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
import Status from '../../components/Dashboard/Status/Status'
import Events from '../../components/Dashboard/Events/Events'
import Form from '../../components/Dashboard/Form/Form'
import {Link, Routes, Route} from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Venues from './pages/Venues/Venues'
import Settings from './pages/Settings/Settings'
import Bookings from './pages/Bookings/Bookings'
import attendees from './pages/Attendees/Attendees'

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <Routes>
          <Route index element ={<DashboardHome/>}/>
          <Route path="bookings" element={<bookings/>}/>
          <Route path="venues"  element={<Venues/>}/>
          <Route path="attendees" element={<></>}/>
          <Route path="settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  )
}

function DashboardHome(){
  return(<>
  <div className={styles.navbar}>
          <div className={styles.navLabel}>
            <h1>Admin Dashboard</h1>
            <p>Welcome back, manager. Here is what's happening today</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Link className="btn btn-outline-secondary d-flex gap-1 align-items-center" to="/">
            <IoEyeOutline/>
            Switch to User View
            </Link>
            <Link><IoMdNotificationsOutline style={{fontSize:"25px", color:"var(--color-primary)"}}/></Link>
          </div>
        </div>
        <Status/>
        <div className={styles.addEvents}>
          <div className={styles.events}>
            <Events/>
          </div>
          <div className={styles.form}>
            <Form/>
          </div>
        </div>
  </>)
}