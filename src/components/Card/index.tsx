import React, { useState } from 'react';

import { ImAttachment } from 'react-icons/im';
import { BiDotsHorizontal } from 'react-icons/bi';
import { FaPen, FaTrash, FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTimes  } from 'react-icons/fa';

import { RowCenterBetween, RowCenterRight, ContentModal, BodyModal } from '../../styles/global';
import {
  Container,
  Title,
  ButtonModal1,
  ButtonModal2,
  ButtonCloseModal,
  Line,
  Label,
  Input,
  TextCountAttachment,
  TextDescription,
  TextLegend,
  ContentBtnOptions,
  DropdownOptions,
  ButtonDropdownOptions,

} from './styles';


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
  const [modalEditTask, setModalEditTask ] = useState(false);
  const [dataTask, setDataTask ] = useState<EditProps>({
    title: '',
    description: '',
  });

  const pegaTaskStorage = (e: string) : Array<CardProps> => {
    const currentUser = localStorage.getItem(e);
    return JSON.parse(currentUser || '[]')
  }

  const editTask = () => {
    const listTask = pegaTaskStorage(taskCurrent)
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
    const taskDeleted = listTask.splice(index, 1)
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    updateListTask!()
  }

  const nextStage = () => {
    const listTask = pegaTaskStorage(taskCurrent)
    const taskDeleted = listTask.splice(index, 1)
    localStorage.setItem(taskCurrent, JSON.stringify(listTask))
    if(taskCurrent==='listTaskTodo'){ 
      const listTask = pegaTaskStorage('listTaskInprogress')
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
    const taskDeleted = listTask.splice(index, 1)
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
              <Title>Editar Tarefa</Title>
              <ButtonCloseModal onClick={() => {toogleModalEditTask()}}>
                <FaTimes className="icon" />
              </ButtonCloseModal>
            </RowCenterBetween>
            <Line/>
            <Label>Titulo</Label>
            <Input 
              value={dataTask.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setDataTask({...dataTask, title: e.target.value})
              }}
            />
            <Label>Descrição</Label>
            <Input 
              value={dataTask.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDataTask({ ...dataTask, description: e.target.value });
              }}
            />
            <Line />
            <RowCenterRight>
              <ButtonModal1 onClick={() => {toogleModalEditTask()}}>
                Cancelar
              </ButtonModal1>
              <ButtonModal2 onClick={editTask}>
                Salvar
              </ButtonModal2>
            </RowCenterRight>
          </BodyModal>
        </ContentModal>
      )}
      <RowCenterBetween>
        <Title>{title}</Title>
        <RowCenterRight>
          <ImAttachment className="icon" />
          <TextCountAttachment>{countAttachment}</TextCountAttachment>
        </RowCenterRight>
      </RowCenterBetween>
      <TextDescription>{description}</TextDescription>
      <Line/>
      <RowCenterBetween>
        <TextLegend>{legend}</TextLegend>
        <ContentBtnOptions>
          <BiDotsHorizontal className="BtnOptions"/>
          <DropdownOptions className="dropdown-options">
              <ButtonDropdownOptions onClick={toogleModalEditTask}>
                <>
                <FaPen className="icon"/>
                Editar
                </>
              </ButtonDropdownOptions>
              {taskCurrent !== 'listTaskDone' && <ButtonDropdownOptions onClick={nextStage}><FaArrowAltCircleRight className="icon"/>Passar Etapa</ButtonDropdownOptions>}
              {taskCurrent !== 'listTaskTodo' &&  <ButtonDropdownOptions onClick={previousStage}><FaArrowAltCircleLeft className="icon"/>Voltar Etapa</ButtonDropdownOptions>}
              <ButtonDropdownOptions onClick={deleteTask}><FaTrash className="icon"/>Excluir</ButtonDropdownOptions>
          </DropdownOptions>
        </ContentBtnOptions>
      </RowCenterBetween>
    </Container>
  )
}

export default Card;