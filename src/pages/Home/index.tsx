import React, { useContext, useEffect, useState } from "react";
import { BsFillCalendarMonthFill, BsFillClockFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiClient } from "../../services/apiClient";
import { TasksContext } from "../../contexts/TasksContext";

import * as S from "./styles";
import { Theme } from "../../styles/Theme";
import { TaskModal } from "../../components/TaskModal";
import { Header } from "../../components/Header";

export const Home: React.FC = () => {
  const { tasks, setTasks, taskData, setTaskData }: any =
    useContext(TasksContext);

  const [taskModalIsOpen, setTaskModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const req = await apiClient.get("/task");
        const res = req.data;
        setTasks([...res]);
      } catch (error) {
        console.log("request fail: ", error);
      }
    })();
  }, []);

  return (
    <S.Container>
      <Header />
      <ToastContainer position="top-center" autoClose={3000} />
      {tasks.length > 0 && taskModalIsOpen && (
        <TaskModal onCloseClick={() => setTaskModalIsOpen(false)} />
      )}
      <h1>Minha Agenda 📆</h1>

      <S.TaskList>
        {tasks.map((item: any, index: number) => {
          return (
            <S.Item
              key={index}
              onClick={() => {
                setTaskModalIsOpen(true);
                setTaskData(item);
              }}
            >
              <strong>{item.name}</strong>
              <span className="title">{item.title}</span>
              <p>
                <BsFillCalendarMonthFill />{" "}
                <input type="date" value={item.date} disabled />
              </p>
              <span>
                <BsFillClockFill color={Theme.colors.secondaryBg} /> {item.hour}
              </span>
            </S.Item>
          );
        })}
      </S.TaskList>
      <S.Link to="/createTask">NOVO COMPROMISSO</S.Link>
    </S.Container>
  );
};
