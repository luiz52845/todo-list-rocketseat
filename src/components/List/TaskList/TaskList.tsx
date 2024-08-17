import styles from "./TaskList.module.css"
import clipboard from "../../../assets/Clipboard.png"
import { Trash } from "phosphor-react";
import { Props } from "../../../App";



export function TaskList({ isEmpty, task, removeTask, toggleIsCompleted }: Props) {

    function handleRemoveTask(id: string) {
        removeTask(id);
    }

    function handleTaskToggleIsCompleted(id: string) {

        toggleIsCompleted(id)
    }

    return (

        <div className={styles.taskListContent}>


            {isEmpty ? (

                <div className={styles.isEmpityContent}>
                    <img src={clipboard} alt="" />
                    <h1>Você ainda não tem tarefas cadastradas
                        Crie tarefas e organize seus itens a fazer</h1>
                </div>

            ) : (

                <div className={styles.isNotEmpityContent}>

                    <ul >
                        {task.map((task) => (
                            <label key={task.id} htmlFor="checkbox" >
                                <li>
                                    <input readOnly type="checkbox" checked={task.isCompleted} onClick={() => handleTaskToggleIsCompleted(task.id)} />

                                    <strong className={task.isCompleted ? styles.completed : ''}>{task.taskName} </strong>

                                    <button><Trash size={22} onClick={() => handleRemoveTask(task.id)} /></button>
                                </li>
                            </label>

                        ))
                        }

                    </ul>
                </div>
            )
            }



        </div >
    )
}

