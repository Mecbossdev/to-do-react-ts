import React from 'react';

//interface
import {ITasks} from '../interfaces/Tasks';

interface Props {
  taskList: ITasks[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        <p>Tem tarefas cadrastadas</p>
      ) : (
        <p>Não há tarefas cadrastadas</p>
      )}
    </>
  )
};

export default TaskList;