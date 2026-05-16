import styles from './Status.module.css'
import { MdEvent } from "react-icons/md";

export default function Status() {
  return (
    <>
      <div className={`card-deck `} >
  <div className={`card ${styles.cardAlign}`}>
    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
    <div className="card-body">
        <MdEvent />
        <br />
      <h6 className="card-title">TOTAL EVENTS</h6>

            <h1>12</h1>

     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className={`card ${styles.cardAlign}`}>
    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
    <div className="card-body">
        <MdEvent />
        <br />
      <h6 className="card-title">TOTAL TICKETS SOLD</h6>

            <h1>12</h1>

      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className={`card ${styles.cardAlign}`}>
    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
    
    <div className="card-body">
        <MdEvent />
        <br />
      <h6 className="card-title">REVENUE</h6>

            <h1>12</h1>

      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

<div className={`card ${styles.cardAlign}`}>
    {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
    <div className="card-body">
        <MdEvent />
        <br />
      <h6 className="card-title">PENDING APPROVALS</h6>

            <h1>12</h1>

      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </>
  );
}