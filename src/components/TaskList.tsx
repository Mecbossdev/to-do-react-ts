import React from 'react';

//interface
import { ITasks } from '../interfaces/Tasks';

import styles from './TaskList.module.css';

interface Props {
  taskList: ITasks[];
  handleDelete(id: number): void;
  handleEdit(task: ITasks): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <h5>
                Descrição:
              </h5>
              <p>{task.description}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => { handleDelete(task.id) }}></i>
            </div>
          </div>


        ))
      ) : (
        <p>Não há tarefas cadrastadas</p>
      )}
    </>
  )
};

export default TaskList;