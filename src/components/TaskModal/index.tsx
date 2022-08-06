import React from "react";
import { GrClose } from "react-icons/gr";
import { BsFillCalendarMonthFill, BsFillClockFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import * as S from "./styles";
import { Theme } from "../../styles/Theme";

type Props = {
  id: string;
  name: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  created_at: Date;
  updated_at?: Date;

  onCloseClick: void | any;
  onDeleteClick?: void;
  onUpdateClick?: void;
};

export const TaskModal: React.FC<Props> = (props) => {
  return (
    <S.Container>
      <S.Modal>
        <button className="close" onClick={props.onCloseClick}>
          <GrClose />
        </button>
        <h2>{props.name}</h2>

        <S.Content>
          <strong>{props.title}</strong>

          <S.DateSection>
            <span>
              <BsFillCalendarMonthFill color={Theme.colors.secondaryBg} />{" "}
              <input disabled type="date" value={props.date} />
            </span>

            <span>
              <BsFillClockFill color={Theme.colors.secondaryBg} /> {props.hour}
            </span>
          </S.DateSection>

          <textarea disabled>{props.description}</textarea>
          <S.ButtonSection>
            <button className="edit"><BiEditAlt/>{" "}Editar</button>
            <button className="delete"><MdDeleteOutline/>{" "}Apagar</button>
          </S.ButtonSection>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};
