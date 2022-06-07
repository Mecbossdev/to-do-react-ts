import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import styles from './App.module.css';

import { ITasks } from './interfaces/Tasks';


function App() {

  const [taskList, setTaskList] = useState<ITasks[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList} 
          />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
