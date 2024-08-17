import logo from '../../assets/LogoTodo.png';
import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
        </header>
    )
}