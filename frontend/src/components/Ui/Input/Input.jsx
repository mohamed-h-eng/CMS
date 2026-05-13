import styles from './Input.module.css'
import { CiLocationOn } from "react-icons/ci";

export function FormInput({title, placeholder}){
    return (
    <>
        <div className={styles.container}>
            <p className={styles.label}>{title}</p>
            <input className={styles.input} placeholder={placeholder}/>
        </div>
    </>
    )
}

export function FormIconInput({icon, title, placeholder}){
    return (
    <>
    <div className={styles.iconContainer}>
        <p className={styles.label}>{title}</p>
        <div className={styles.iconInputContainer}>
            {/* <{icon}/> */}
            <input className={styles.iconInput} placeholder={placeholder}/>
        </div>
    </div>
    </>
    )
}

export function FormDualLayout({children}){
    return (
    <>
        <div className={styles.dualContainer}>
            {children}
        </div>
    </>
    )
}

export function FormImage({title}){
    return(
        <>
            <div className={styles.container}>
                <p className={styles.label}>{title}</p>
                <div className={styles.dropArea}>

                </div>
            </div>
        </>
    )
}