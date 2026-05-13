import SideBar from '../../components/Dashboard/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
import Status from '../../components/Dashboard/Status/Status'
export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideBar />

      <main className={styles.content}>
        <h1>Admin Dashboard</h1>
        <p>Welcome back, manager. Here is what's happening today.</p>
        <Status/>
      </main>

    </div>
  )
}
