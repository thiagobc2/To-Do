import React, { useState, useEffect } from 'react';

import { FaPlus, FaTimes } from 'react-icons/fa';

import { RowCenterBetween, RowCenterLeft, ContentModal, BodyModal, RowCenterRight } from '../../styles/global';
import { Container, ContentTask } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';

interface FieldsProps {
  id: number,
  title: string,
  countAttachment: string,
  description: string,
  legend: string,
  taskCurrent: string,
  updateListTask?: Function
} 
interface NewTaskProps {
  title: string,
  description: string,
} 


const MainPage: React.FC<FieldsProps> = () => {
  // const arrayTask = 
  //   [
  //     { 
  //       id: 1,
  //       title: 'Design',
  //       countAttachment: '0',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  //       legend: 'Important',
  //     },
  //     { 
  //       id: 2,
  //       title: 'Website',
  //       countAttachment: '1',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit',
  //       legend: 'Irrelevante',
  //     },
  //     { 
  //       id: 3,
  //       title: 'Brand',
  //       countAttachment: '2',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  //       legend: 'Normal',
  //     },
  //   ]
  // localStorage.setItem('listTaskDone', JSON.stringify(arrayTask))
 
  const pegaTaskStorage = (e: string): Array<FieldsProps> => {
    const currentUser = localStorage.getItem(e);
    return JSON.parse(currentUser || '{}')
  }
  
  const [modalNewTask, setModalNewTask] = useState(false);
  const [currentStage, setCurrentStage] = useState('');
  const [listTaskTodo, setListTaskTodo] = useState(pegaTaskStorage('listTaskTodo'));
  const [listTaskInprogress, setListTaskInprogress] = useState(pegaTaskStorage('listTaskInprogress'));
  const [listTaskDone, setListTaskDone] = useState(pegaTaskStorage('listTaskDone'));
  const [dataTask, setDataTask ] = useState<NewTaskProps>({
    title: '',
    description: '',
  });

  // console.log('Todo', listTaskTodo)
  // console.log('InProgress', listTaskInprogress)
  // console.log('Done', listTaskDone)


  let updateMyListTask = function ()  {
    setListTaskTodo(pegaTaskStorage('listTaskTodo'))
    setListTaskInprogress(pegaTaskStorage('listTaskInprogress'))
    setListTaskDone(pegaTaskStorage('listTaskDone'))
  };

  

  const toogleModalNewTask = (e: string) => {
    setDataTask({
      title: '',
      description: '',
    })
    setModalNewTask(!modalNewTask);
    setCurrentStage(e)
  }

  const addTask = () => {
    if ( dataTask.title === ''){
      return;
    }
    if ( dataTask.description === ''){
      return;
    }else
    {
      const listTask = pegaTaskStorage(currentStage)
      listTask.push(
        {
          id: listTask.length +1,
          title: dataTask.title,
          countAttachment: '0',
          description: dataTask.description,
          taskCurrent: currentStage,
          legend: 'Important',
        }
        )
      localStorage.setItem(currentStage , JSON.stringify(listTask))
      updateMyListTask()
      toogleModalNewTask('')
    }
  }
       
  return (
    <Container>

      {modalNewTask && (
        <ContentModal>
          <BodyModal>
            <RowCenterBetween>
              <h1>Editar Tarefa</h1>
              <button
                type="button"
                className="btn-modal3"
                onClick={() => {
                  toogleModalNewTask('');
                }}
              >
                <FaTimes className="icon-modal-times" />
              </button>
            </RowCenterBetween>
            <hr className="hr-modal"/>

            <label>Titulo</label>
            <input 
              type="text"
              className="input-modal"
              value={dataTask.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setDataTask({...dataTask, title: e.target.value})
              }}
            />
            <label>Descrição</label>
            <input 
              type="text"
              className="input-modal"
              value={dataTask.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDataTask({ ...dataTask, description: e.target.value });
              }}
            />
            <hr className="hr-modal"/>
            <RowCenterRight>
              <button
                type="button"
                className="btn-modal1"
                onClick={() => {
                  toogleModalNewTask('');
                }}
              >
                Cancelar
              </button>
              <button type="button" className="btn-modal2 mL20" onClick={addTask}>
                Salvar
              </button>
            </RowCenterRight>
          </BodyModal>
        </ContentModal>
      )}

      <Header />

      <ContentTask>
        <ul>
          <li>
            <RowCenterBetween className="content-header">
              <RowCenterLeft >
                <p className="tittle">
                  A Fazer
                </p>
                <p className="count-tasks">
                  ({listTaskTodo.length})
                </p>
              </RowCenterLeft>
              <button 
                className="btn-new-task"
                onClick={()=>{toogleModalNewTask('listTaskTodo')}}
              >
                <FaPlus className="icon-btn"/>
                Nova Tarefa
              </button>
            </RowCenterBetween>
            <hr/>
            {listTaskTodo && listTaskTodo.map((task, index) => (
              <Card 
                key={index}
                index= {index}
                title= {task.title}
                countAttachment= {task.countAttachment}
                description= {task.description}
                legend= {task.legend}
                taskCurrent='listTaskTodo'
                updateListTask={()=>{updateMyListTask()}}
              />
            ))}
          </li>
          <li>
            <RowCenterBetween className="content-header">
              <RowCenterLeft >
                <p className="tittle">
                  Em Progresso
                </p>
                <p className="count-tasks">
                  ({listTaskInprogress.length})
                </p>
              </RowCenterLeft>
              <button 
                className="btn-new-task"
                onClick={()=>{toogleModalNewTask('listTaskInprogress')}}  
              >
                <FaPlus className="icon-btn"/>
                Nova Tarefa
              </button>
            </RowCenterBetween>
            <hr/>
            {listTaskInprogress && listTaskInprogress.map((task, index) => (
              <Card
                key={index}
                index= {index}
                title= {task.title}
                countAttachment= {task.countAttachment}
                description= {task.description}
                legend= {task.legend}
                taskCurrent='listTaskInprogress'
                updateListTask={()=>{updateMyListTask()}}
              />
            ))}
          </li>
          <li>
            <RowCenterBetween className="content-header">
              <RowCenterLeft >
                <p className="tittle">
                  Finalizado
                </p>
                <p className="count-tasks">
                  ({listTaskDone.length})
                </p>
              </RowCenterLeft>
              <button 
                className="btn-new-task"
                onClick={()=>{toogleModalNewTask('listTaskDone')}}
              >
                <FaPlus className="icon-btn"/>
                Nova Tarefa
              </button>
            </RowCenterBetween>
            <hr/>
            {listTaskDone.map( (task, index) => (
              <Card 
                key={index}
                index={index}
                title= {task.title}
                countAttachment= {task.countAttachment}
                description= {task.description}
                legend= {task.legend}
                taskCurrent='listTaskDone'
                updateListTask={()=>{updateMyListTask()}}
              />
            ))}
          </li>
        </ul>
      </ContentTask>

    </Container>
  )
}

export default MainPage;