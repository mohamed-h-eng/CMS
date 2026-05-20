import styles from './Input.module.css'
import { IoIosSearch } from "react-icons/io";

export function Input({title, placeholder}){
    return (<>
        <div className={styles.container}>
            <p className={styles.label}>{title}</p>
            <input className={styles.input} placeholder={placeholder}/>
        </div>
    </>)
}

export function InputDual({children}){
    return (<>
        <div className={styles.dual}>
            {children}
        </div>
    </>)
}

export function InputSearch({placeholder}){
    return(<>
        <div className={styles.Search}>
            <IoIosSearch style={{border:"none"}}/>
            <input placeholder={placeholder} className={styles.input}/>
        </div>
    </>)
}