import React, { useEffect, useState } from "react";
import { BsFillCalendarMonthFill, BsFillClockFill } from "react-icons/bs";

import { apiClient } from "../../services/apiClient";

import * as S from "./styles";
import { Theme } from "../../styles/Theme";
import { TaskModal } from "../../components/TaskModal";

type Task = {
  id: string;
  name: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  created_at: Date;
  updated_at?: Date;
};

type IsOpenProps = {
  open: boolean;
  index: number;
};

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskModalIsOpen, setTaskModalIsOpen] = useState<IsOpenProps>({
    open: false,
    index: 0,
  });

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
      {tasks.length > 0 && taskModalIsOpen.open && (
        <TaskModal
          id={tasks[taskModalIsOpen.index].id}
          name={tasks[taskModalIsOpen.index].name}
          title={tasks[taskModalIsOpen.index].title}
          description={tasks[taskModalIsOpen.index].description}
          date={tasks[taskModalIsOpen.index].date}
          hour={tasks[taskModalIsOpen.index].hour}
          created_at={tasks[taskModalIsOpen.index].created_at}
          onCloseClick={() =>
            setTaskModalIsOpen({ open: false, index: taskModalIsOpen.index })
          }
        />
      )}
      <h1>Minha Agenda 📆</h1>

      <S.TaskList>
        {tasks.map((item: any, index: number) => {
          return (
            <S.Item
              key={index}
              onClick={() => setTaskModalIsOpen({ open: true, index })}
            >
              <strong>{item.name}</strong>
              <p className="title">{item.title}</p>
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
