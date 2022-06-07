import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

//CSS
import styles from './TaskForm.module.css';

//Inteface
import { ITasks } from '../interfaces/Tasks';

interface Props {
  btnText: string;
  taskList: ITasks[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITasks[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTasks: ITasks = { id, title, difficulty };

    setTaskList!([...taskList, newTasks]);

    setTitle("");;
    setDifficulty(0);

    console.log(taskList);
  }

  const handleChanger = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value);
    }else{
      setDifficulty(parseInt(e.target.value));
    }
    
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChanger}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificulty">Dificuldade:</label>
        <input
          type="text"
          name="dificulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChanger}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
};

export default TaskForm;