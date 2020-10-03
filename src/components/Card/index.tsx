import React, { useState } from 'react';

import { ImAttachment } from 'react-icons/im';
import { BiDotsHorizontal } from 'react-icons/bi';
import { FaPen, FaTrash, FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTimes  } from 'react-icons/fa';

import { RowCenterBetween, RowCenterRight, ContentModal, BodyModal } from '../../styles/global';
import { Container } from './styles';


interface CardProps {
  index: number,
  title: string,
  countAttachment: string,
  description: string,
  legend: string,
  taskCurrent: string,
  updateListTask?: Function,
} 

interface EditProps {
  title: string,
  description: string,
} 

const Card: React.FC<CardProps> = ({ 
  index, 
  title, 
  countAttachment, 
  description, 
  legend, 
  taskCurrent, 
  updateListTask,
}: CardProps) => {
  const [newListTask, setNewListTask ] = useState();
  const [descricao, setDescricao ] = useState();
  const [modalEditTask, setModalEditTask ] = useState(false);
  const [dataTask, setDataTask ] = useState<EditProps>({
    title: '',
    description: '',
  });

  const pegaTaskStorage = (e: string) : Array<CardProps> => {
    const currentUser = localStorage.getItem(e);
    return JSON.parse(currentUser || '{}')
  }

  

  const editTask = () => {
    const listTask = pegaTaskStorage(taskCurrent)
    let guardaTask = listTask[index]
    listTask[index] = {
      index: index,
      title: dataTask.title,
      countAttachment: '0',
      description: dataTask.description,
      taskCurrent: taskCurrent,
      legend: 'Important',
    }
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    updateListTask!()
    setModalEditTask(!modalEditTask);
  }

  const deleteTask = () => {
    const listTask = pegaTaskStorage(taskCurrent)
    let taskDeleted = listTask.splice(index, 1)
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    updateListTask!()
  }

  const nextStage = () => {
    const listTask = pegaTaskStorage(taskCurrent)
    let taskDeleted = listTask.splice(index, 1)
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    if(taskCurrent==='listTaskTodo'){ 
      const listTask = pegaTaskStorage('listTaskInprogress')
      console.log(taskDeleted)
      listTask.push(taskDeleted[0])
      localStorage.setItem('listTaskInprogress', JSON.stringify(listTask))
    }
    if(taskCurrent==='listTaskInprogress'){ 
      const listTask = pegaTaskStorage('listTaskDone')
      listTask.push(taskDeleted[0])
      localStorage.setItem('listTaskDone', JSON.stringify(listTask))
    }  
    updateListTask!()
  }

  const previousStage = () => {
    const listTask = pegaTaskStorage(taskCurrent)
    let taskDeleted = listTask.splice(index, 1)
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    if(taskCurrent==='listTaskDone'){ 
      const listTask = pegaTaskStorage('listTaskInprogress')
      listTask.push(taskDeleted[0])
      localStorage.setItem("listTaskInprogress", JSON.stringify(listTask))
    }
    if(taskCurrent==='listTaskInprogress'){ 
      const listTask = pegaTaskStorage('listTaskTodo')
      listTask.push(taskDeleted[0])
      localStorage.setItem("listTaskTodo", JSON.stringify(listTask))
    }
    updateListTask!()
  }

  const toogleModalEditTask = () => {
    setDataTask({
      title: '',
      description: '',
    })
    setModalEditTask(!modalEditTask);
  }
  return (
    <Container>
      {modalEditTask && (
        <ContentModal>
          <BodyModal>
            <RowCenterBetween>
              <h1>Editar Tarefa</h1>
              <button
                type="button"
                className="btn-modal3"
                onClick={() => {
                  toogleModalEditTask();
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
                  toogleModalEditTask();
                }}
              >
                Cancelar
              </button>
              <button type="button" className="btn-modal2 mL20" onClick={editTask}>
                Salvar
              </button>
            </RowCenterRight>
          </BodyModal>
        </ContentModal>
      )}
      <RowCenterBetween>
        <p className="tittle">{title}</p>
        <RowCenterRight>
          <ImAttachment className="icon" />
          <p className="count-attachment">
            {countAttachment}
          </p>
        </RowCenterRight>
        
      </RowCenterBetween>
      <p className="description" >
          {description}
      </p>
      <hr/>
      <RowCenterBetween className="mT10">
        <p className="legend">
          {legend}
        </p>
        <div className="content-btn-options">
          <button className="btn-options">
            <BiDotsHorizontal className="icon-options"/>
          </button>
          <div className="dropdown-options">
              <button onClick={toogleModalEditTask}><FaPen className="icon-btn-dropdown"/>Editar</button>
              {taskCurrent != 'listTaskDone' && <button onClick={nextStage}><FaArrowAltCircleRight className="icon-btn-dropdown"/>Passar Etapa</button>}
              {taskCurrent != 'listTaskTodo' &&  <button onClick={previousStage}><FaArrowAltCircleLeft className="icon-btn-dropdown"/>Voltar Etapa</button>}
              <button onClick={deleteTask}><FaTrash className="icon-btn-dropdown"/>Excluir</button>
          </div>
        </div>
      </RowCenterBetween>
    </Container>
  )
}

export default Card;