import { PlusCircle } from "phosphor-react";
import styles from './Button.module.css';
import { Task } from "../../App"

export function Button({ ...task }: Task) {

    function handleTeste() {
        console.log(task)
    }


    return (
        <button type="submit" className={styles.button} onClick={handleTeste}>Criar
            <PlusCircle size={14}></PlusCircle>
        </button>
    )
}