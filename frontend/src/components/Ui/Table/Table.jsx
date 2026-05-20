import styles from './Table.module.css'
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export function Table({title, placeholder, header, total}){
    header=[
        "Event Name","Date","Venue","Capacity","Status","Actions",
    ]
    return(<>
    <div className={styles.container}>
        <div className={styles.header}>
            <p>{title}</p>
            <div className={styles.headerSearch}>
                <div className={styles.SearchInput}>
                    <IoIosSearch style={{border:"none"}}/>
                    <input placeholder={placeholder} className={styles.input}/>
                </div>
                <button className={styles.filter}><IoFilterSharp/></button>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.tableHead}>
                {header.map((item,index)=>(
                    <p className={styles.item}>{item}</p>
                ))}
            </div>
            <div className={styles.tableBody}>
            </div>
        </div>
    </div>
    </>)
}

// function EventItem(data){
//     return (
//         <>
//         <div className={styles.itemContainer}>
//             <p className={`${styles.item} ${styles.eventName}`}>name{data.name}</p>
//             <p className={styles.item}>date{data.date}</p>
//             <p className={styles.item}>location{data.location}</p>
//             <div className={`${styles.item} ${styles.capacity}`}>
//                 <div className={styles.progress}>
//                     <div className={styles.passive}></div>
//                     <div className={styles.active}></div>
//                 </div>
//                 <div className={styles.progressLabel}>
//                     <p>425/500{data.capacity}</p>
//                 </div>
//             </div>
//             <div className={styles.item}>
//                 <p className={styles.status}>Upcoming{data.status}</p>
//             </div>
//             <div className={styles.actions}>
//                 <button className={styles.actionEdit}><MdOutlineEdit /></button>
//                 <button className={styles.actionDelete}><RiDeleteBin6Line /></button>
//             </div>
//         </div>
//         </>
//     )
// }