import React, { HtmlHTMLAttributes, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GrClose } from "react-icons/gr";
import { BsFillCalendarMonthFill, BsFillClockFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import { TasksContext } from "../../contexts/TasksContext";

import * as S from "./styles";
import { Theme } from "../../styles/Theme";
import { Input } from "../Input";
import { apiClient } from "../../services/apiClient";

type Props = {
  onCloseClick: void | any;
};

export const TaskModal: React.FC<Props> = (props) => {
  const { taskData, setTaskData, setTasks }: any = useContext(TasksContext);
  const [editable, setEditable] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const req = await apiClient.patch(`/task/${taskData.id}`, taskData);
      const res = req.data.task;
      const alltasks = await apiClient.get("/task");
      const alltasksRes = alltasks.data;
      setTaskData(res);
      setTasks([...alltasksRes]);
      setEditable(false);
      toast.success("Atualizado com sucesso!");
    } catch (error) {
      toast.error("Problema ao conectar com servidor, tente mais tarde!");
    }
  };

  const handleDelete = async () => {
    try {
      const req = await apiClient.delete(`/task/${taskData.id}`);
      const alltasks = await apiClient.get("/task");
      const alltasksRes = alltasks.data;
      setTasks([...alltasksRes]);
      setEditable(false);
      props.onCloseClick();
      toast.success("Deletado com sucesso!");
    } catch (error) {
      toast.error("Atualizando dados");
    }
  };

  return (
    <S.Container>
      <S.Modal>
        <button className="close" onClick={props.onCloseClick}>
          <GrClose />
        </button>
        {editable ? (
          <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              value={taskData.name}
              type="text"
              name="name"
              placeholder="nome"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                setTaskData({ ...taskData, name: value });
              }}
            />

            <div>
              <Input
                value={taskData.hour}
                type="time"
                name="hour"
                placeholder="Horário do compromisso"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target;
                  setTaskData({ ...taskData, hour: value });
                }}
              />
              <Input
                value={taskData.date}
                type="date"
                name="date"
                placeholder="Data do compromisso"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target;
                  setTaskData({ ...taskData, date: value });
                }}
              />
            </div>

            <div>
              <Input
                value={taskData.title}
                type="text"
                name="title"
                placeholder="título do compromisso"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target;
                  setTaskData({ ...taskData, title: value });
                }}
              />

              <button type="submit">Salvar</button>
            </div>

            <textarea
              value={taskData.description}
              name="description"
              placeholder="descrição do compromisso"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                const { value } = event.target;
                setTaskData({ ...taskData, description: value });
              }}
            />
          </form>
        ) : (
          <>
            <h2>{taskData.name}</h2>

            <S.Content>
              <strong>{taskData.title}</strong>

              <S.DateSection>
                <span>
                  <BsFillCalendarMonthFill color={Theme.colors.secondaryBg} />{" "}
                  <input disabled type="date" value={taskData.date} />
                </span>

                <span>
                  <BsFillClockFill color={Theme.colors.secondaryBg} />{" "}
                  {taskData.hour}
                </span>
              </S.DateSection>

              <textarea disabled defaultValue={taskData.description} />
              <S.ButtonSection>
                <button onClick={() => setEditable(true)} className="edit">
                  <BiEditAlt /> Editar
                </button>
                <button className="delete" onClick={handleDelete}>
                  <MdDeleteOutline /> Apagar
                </button>
              </S.ButtonSection>
            </S.Content>
          </>
        )}
      </S.Modal>
    </S.Container>
  );
};
