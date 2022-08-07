import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.input`
  width: 100%;
  height: 3em;

  padding: 0 0.5em;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.smoothGray};
  box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

  font-family: "Poppins", sans-serif;
  font-size: 1em;
  outline: none;

  ::placeholder {
    color: ${Theme.colors.smoothGray};
  }
`;
