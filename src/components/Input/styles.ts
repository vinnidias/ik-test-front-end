import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.input`
  width: fit-content;
  height: 3em;
  max-width: 180px;

  padding: 0 .5em;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.secondaryBg};
  box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1em;
  
  background-color: ${Theme.colors.smoothGray};
  outline: none;


`