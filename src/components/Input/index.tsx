import React from "react";
import { Container } from "./styles";

type Props = React.InputHTMLAttributes<HTMLElement> & {
  type: string;
  value: string | number;
  name: string;
};

export const Input = ({ type, value, name, ...rest }: Props) => {
  return <Container type={type} value={value} name={name} {...rest} />;
};
