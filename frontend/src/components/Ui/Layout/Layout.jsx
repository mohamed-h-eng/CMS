import styles from './Layout.module.css'

export default function Layout({children, title}){
    return (<>
        <div className={styles.container}>
            <h4 className={styles.label}>{title}</h4>
            {children}
        </div>
    </>)
}