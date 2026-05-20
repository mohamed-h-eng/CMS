import styles from './Bookings.module.css'
import {Input, InputSearch} from '../../../../components/Ui/Input/Input'
import Status from '../../../../components/Dashboard/Status/Status'
import {Table} from '../../../../components/Ui/Table/Table'
export default function Bookings() {
  return (
  <>
  <div className={styles.navbar}>
      <div className={styles.navLabel}>
        <h1>Bookings</h1>
        <p>Review recent ticket transactions and manage attendees statuses</p>
      </div>
      <InputSearch placeholder="Search ID or Name"/>
  </div>
  <div className={styles.status}>
    <Status/>
    <Table title="Active Events" placeholder="Search events..."/>
  </div>
  </>
  )
}
