import styles from './Input.module.css'
<<<<<<< HEAD
import { CiLocationOn } from "react-icons/ci";

export function FormInput({title, placeholder}){
    return (
    <>
=======

export function Input({title, placeholder}){
    return (<>
>>>>>>> master
        <div className={styles.container}>
            <p className={styles.label}>{title}</p>
            <input className={styles.input} placeholder={placeholder}/>
        </div>
<<<<<<< HEAD
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
=======
    </>)
}

export function InputDual({children}){
    return (<>
        <div className={styles.dual}>
            {children}
        </div>
    </>)
>>>>>>> master
}