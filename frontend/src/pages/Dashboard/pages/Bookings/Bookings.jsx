import styles from './Bookings.module.css'
import {Input, InputSearch} from '../../../../components/Ui/Input/Input'
export default function Bookings() {
  return (
  <>
  <div className={styles.navbar}>
      <div className={styles.navLabel}>
        <h1>Bookings</h1>
        <p>Review recent ticket transactions and manage attendees statuses</p>
      </div>
      <InputSearch/>
  </div>
  </>
  )
}
