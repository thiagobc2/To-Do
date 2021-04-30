import React, { useState, useEffect } from 'react';

import { FaPlus, FaTimes } from 'react-icons/fa';

import {
  RowCenterBetween,
  RowCenterLeft,
  ContentModal,
  BodyModal,
  RowCenterRight,
} from '../../styles/global';

import {
  Container,
  ContentTask,
  Title,
  ButtonCloseModal,
  Line,
  Label,
  Input,
  ButtonModal1,
  ButtonModal2,
  TextCountTask,
  ButtonNewTask,
  ContentHeader,
} from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';

interface FieldsProps {
  id: number;
  title: string;
  countAttachment: string;
  description: string;
  legend: string;
  taskCurrent: string;
  updateListTask?: Function;
}
interface NewTaskProps {
  title: string;
  description: string;
}

const MainPage: React.FC<FieldsProps> = () => {
  const pegaTaskStorage = (e: string) => {
    const currentUser = localStorage.getItem(e);
    return JSON.parse(currentUser || '[]');
  };

  const [modalNewTask, setModalNewTask] = useState(false);
  const [currentStage, setCurrentStage] = useState<string>('');
  const [listTaskTodo, setListTaskTodo] = useState<Array<FieldsProps>>(
    pegaTaskStorage('listTaskTodo'),
  );
  const [listTaskInprogress, setListTaskInprogress] = useState<
    Array<FieldsProps>
  >(pegaTaskStorage('listTaskInprogress'));
  const [listTaskDone, setListTaskDone] = useState<Array<FieldsProps>>(
    pegaTaskStorage('listTaskDone'),
  );
  const [dataTask, setDataTask] = useState<NewTaskProps>({
    title: '',
    description: '',
  });

  const updateMyListTask = function () {
    setListTaskTodo(pegaTaskStorage('listTaskTodo'));
    setListTaskInprogress(pegaTaskStorage('listTaskInprogress'));
    setListTaskDone(pegaTaskStorage('listTaskDone'));
  };

  const toogleModalNewTask = (e: string) => {
    setDataTask({
      title: '',
      description: '',
    });
    setModalNewTask(!modalNewTask);
    setCurrentStage(e);
  };


  const addTask = () => {
    if (dataTask.title === '') {
      return;
    }
    if (dataTask.description === '') {
      console.log('a');
    } else {
      let listTask: Array<FieldsProps> = pegaTaskStorage(currentStage);
      listTask = [
        ...listTask,
        {
          id: listTask.length + 1,
          title: dataTask.title,
          countAttachment: '0',
          description: dataTask.description,
          taskCurrent: currentStage,
          legend: 'Important',
        },
      ];
      localStorage.setItem(currentStage, JSON.stringify(listTask));
      updateMyListTask();
      toogleModalNewTask('');
    }
  };

  return (
    <Container>
      {modalNewTask && (
        <ContentModal>
          <BodyModal>
            <RowCenterBetween>
              <Title>Editar Tarefa</Title>
              <ButtonCloseModal
                onClick={() => {
                  toogleModalNewTask('');
                }}
              >
                <FaTimes className="icon" />
              </ButtonCloseModal>
            </RowCenterBetween>
            <Line />

            <Label>Titulo</Label>
            <Input
              value={dataTask.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDataTask({ ...dataTask, title: e.target.value });
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
              <ButtonModal1
                onClick={() => {
                  toogleModalNewTask('');
                }}
              >
                Cancelar
              </ButtonModal1>
              <ButtonModal2 onClick={addTask}>Salvar</ButtonModal2>
            </RowCenterRight>
          </BodyModal>
        </ContentModal>
      )}

      <Header />

      <ContentTask>
        <ul>
          <li>
            <ContentHeader className="content-header">
              <RowCenterLeft>
                <Title>A Fazer</Title>
                <TextCountTask>
({listTaskTodo?.length}
)
{' '}
</TextCountTask>
              </RowCenterLeft>
              <ButtonNewTask
                onClick={() => {
                  toogleModalNewTask('listTaskTodo');
                }}
              >
                <FaPlus className="icon" />
                Nova Tarefa
              </ButtonNewTask>
            </ContentHeader>
            <Line />

            {listTaskTodo.map((task, index) => {
              return (
                <Card
                  key={task.id}
                  index={index}
                  title={task.title}
                  countAttachment={task.countAttachment}
                  description={task.description}
                  legend={task.legend}
                  taskCurrent="listTaskTodo"
                  updateListTask={() => {
                    updateMyListTask();
                  }}
                />
              );
            })}
          </li>
          <li>
            <ContentHeader>
              <RowCenterLeft>
                <Title>Em Progresso</Title>
                <TextCountTask>
({listTaskInprogress?.length}
)
{' '}
</TextCountTask>
              </RowCenterLeft>
              <ButtonNewTask
                onClick={() => {
                  toogleModalNewTask('listTaskInprogress');
                }}
              >
                <FaPlus className="icon-btn" />
                Nova Tarefa
              </ButtonNewTask>
            </ContentHeader>
            <Line />
            {listTaskInprogress.map((task, index) => (
              <Card
                key={task.id}
                index={index}
                title={task.title}
                countAttachment={task.countAttachment}
                description={task.description}
                legend={task.legend}
                taskCurrent="listTaskInprogress"
                updateListTask={() => {
                  updateMyListTask();
                }}
              />
            ))}
          </li>
          <li>
            <ContentHeader>
              <RowCenterLeft>
                <Title>Finalizado</Title>
                <TextCountTask>
({listTaskDone?.length}
)
{' '}
</TextCountTask>
              </RowCenterLeft>
              <ButtonNewTask
                onClick={() => {
                  toogleModalNewTask('listTaskDone');
                }}
              >
                <FaPlus className="icon-btn" />
                Nova Tarefa
              </ButtonNewTask>
            </ContentHeader>
            <Line />
            {listTaskDone.map((task, index) => (
              <Card
                key={task.id}
                index={index}
                title={task.title}
                countAttachment={task.countAttachment}
                description={task.description}
                legend={task.legend}
                taskCurrent="listTaskDone"
                updateListTask={() => {
                  updateMyListTask();
                }}
              />
            ))}
          </li>
        </ul>
      </ContentTask>
    </Container>
  );
};

export default MainPage;
