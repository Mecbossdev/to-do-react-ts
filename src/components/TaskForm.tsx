import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

//CSS
import styles from './TaskForm.module.css';

//Inteface
import { ITasks } from '../interfaces/Tasks';

interface Props {
  btnText: string;
  taskList: ITasks[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITasks[]>>
  task?: ITasks | null;
  handleUpdate?(id: number, title: string, description: string): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {

    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate) {
      handleUpdate(id, title, description);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTasks: ITasks = { id, title, description };

      setTaskList!([...taskList, newTasks]);

      setTitle("");;
      setDescription("");
    }
  }



  const handleChanger = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
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
        <label htmlFor="dificulty">Descrição:</label>
        <input
          type="text"
          name="dificulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChanger}
          value={description}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
};

export default TaskForm;