import styles from './Input.module.css'
import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

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

export function InputSearch(){
    return (
        <>
            <div className={styles.Search}>
                <div className={styles.SearchInput}>
                    <IoIosSearch style={{border:"none"}}/>
                    <input placeholder="Search events..." className={styles.input}/>
                </div>
            </div>
        </>
    )
}