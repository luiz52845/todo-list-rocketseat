import styles from './Input.module.css'

export function Input() {
    return (
        <input type="text" placeholder="Adicione uma tarefa" className={styles.input} />
    )
}