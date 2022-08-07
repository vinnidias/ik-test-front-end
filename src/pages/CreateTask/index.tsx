import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiClient } from "../../services/apiClient";

import * as S from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

type TaskProps = {
  name: string;
  title: string;
  date: string;
  hour: string;
  description: string;
};

export const CreateTask: React.FC = () => {
  const [newTask, setNewTask] = useState<TaskProps>({
    name: "",
    title: "",
    description: "",
    hour: "00:00",
    date: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const req = await apiClient.post("/task", newTask);
      const res = req.data;
      toast.success("Comprimisso criado com sucesso");
      setNewTask({
        name: "",
        title: "",
        description: "",
        hour: "00:00",
        date: "",
      });
    } catch (error) {
      toast.error("Verifique os dados");
    }
  };

  return (
    <S.Container>
      <Header/>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        draggable={false}
        theme="light"
      />
      <h1>Adicionar Compromisso 📆</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
          name="name"
          type="text"
          value={newTask.name}
          placeholder="Nome"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setNewTask({ ...newTask, name: value });
          }}
          required
        />

        <Input
          name="title"
          type="text"
          value={newTask.title}
          placeholder="Título do compromisso"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setNewTask({ ...newTask, title: value });
          }}
          required
        />

        <S.DateSection>
          <Input
            name="date"
            type="date"
            value={newTask.date}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              setNewTask({ ...newTask, date: value });
            }}
            required
          />

          <Input
            name="hour"
            type="time"
            value={newTask.hour}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              setNewTask({ ...newTask, hour: value });
            }}
            required
          />
        </S.DateSection>

        <textarea
          value={newTask.description}
          name="description"
          placeholder="descrição do compromisso"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const { value } = event.target;
            setNewTask({ ...newTask, description: value });
          }}
          required
        />
        
        <button type="submit">Cadastrar</button>
      </form>
    </S.Container>
  );
};
