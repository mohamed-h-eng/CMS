import styles from './Input.module.css'

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