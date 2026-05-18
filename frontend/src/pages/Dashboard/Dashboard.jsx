<<<<<<< HEAD
import {FormInput, FormIconInput, FormDualLayout, FormImage} from '../../components/Ui/Input/Input'
import Button from '../../components/Ui/Button/Button'
import Layout from '../../components/Ui/Layout/Layout'
import { CiLocationOn } from "react-icons/ci";
export default function Dashboard(){
    return(<>
        <div className="container">
            <Layout title="Event Title">
                <FormInput title="Event Title"  placeholder="Enter title"/>
                <FormDualLayout>
                    <FormInput title="Category" placeholder="Enter Category"/>
                    <FormInput title="Capacity" placeholder="Enter Capacity"/>    
                </FormDualLayout>
                <FormInput title="Date & Time" placeholder="Enter Date"/>
                {/* <FormInput title="Venue Location" placeholder="Search Venue..."/> */}
                <FormIconInput title="Venue Location" placeholder="Search Venue..." icon={CiLocationOn}/>
                <FormInput title="Ticket Price ($)" placeholder="0.00"/>
                <FormImage title="Event Image"/>
                <Button>Publish Event</Button>
            </Layout>
        </div>
    </>)
}
=======
import SideBar from '../../components/Dashboard/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
import Status from '../../components/Dashboard/Status/Status'
import Events from '../../components/Dashboard/Events/Events'
import Form from '../../components/Dashboard/Form/Form'
import {Link} from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <div className={styles.navLabel}>
            <h1>Admin Dashboard</h1>
            <p>Welcome back, manager. Here is what's happening today</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Link className="btn btn-outline-secondary d-flex gap-1 align-items-center" to="/home">
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
      </div>
    </div>
  )
}
>>>>>>> master
