import { Header } from "./components/Header/Header"
import styles from './App.module.css';
import { useEffect, useState } from "react";
import { TaskList } from "./components/List/TaskList/TaskList";
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react";


export interface Task {
  id: string,
  taskName: string,
  isCompleted: boolean

}

export interface Props {
  isEmpty: boolean
  task: Task[]
  removeTask(id: string): void
  toggleIsCompleted(id: string): void

}

export interface counter {
  tasksCounter: number
  checkedTasksCounter: number
}


export function App() {

  const [task, setTask] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState("")

  let isEmpty = true
  if (task.length !== 0) {
    isEmpty = false
  }

  useEffect(() => {
    console.log("tasks", task)

  }, [task])

  const CreatedTask = task.length;

  const completedCount = task.reduce((total, task) => {
    return total + (task.isCompleted ? 1 : 0);
  }, 0);



  function handleCreateNewTask() {

    let newTask: Task = {
      id: uuidv4(),
      taskName: inputValue,
      isCompleted: false,
    }

    setTask((task) => [...task, newTask])
    setInputValue("")
  }

  function removeTask(id: string) {
    const newArrayTask = task.filter(item => item.id !== id)
    setTask(newArrayTask)
  }

  function toggleIsCompleted(id: string) {

    console.log("id", id)
    const newArrayTask = task.find(item => item.id === id)
    if (newArrayTask) {
      newArrayTask.isCompleted = !newArrayTask.isCompleted
      setTask([...task])
    }


  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.content}>

          <input type="text" placeholder="Adicione uma tarefa" className={styles.input} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
          <button type="submit" className={styles.button} onClick={handleCreateNewTask}>Criar
            <PlusCircle size={14}></PlusCircle>
          </button>

        </section>
      </div>

      <section className={styles.container}>

        <div className={styles.taskInfoContent}>
          <p>Terefas criadas<span>{CreatedTask}</span></p>

          <p>concluidas<span>
            {CreatedTask === 0
              ? CreatedTask
              : `${completedCount} de ${CreatedTask}`}
          </span></p>
        </div>
      </section>
      <div className={styles.container}>
        <TaskList removeTask={removeTask} toggleIsCompleted={toggleIsCompleted} isEmpty={isEmpty} task={task}>

        </TaskList >
      </div>

    </>
  )
}

export default App
