import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  padding: 10px 2em;

  .link {
    text-decoration: none;
    cursor: pointer;
    transition: .4s;

    :hover {
      opacity: .6;
    }
  }

  strong {
    font-family: "Poppins", sans-serif;
    color: #000;
    letter-spacing: 1px;
  }
  span {
    font-family: "Poppins", sans-serif;
    color: ${Theme.colors.secondaryBg};
    margin-left: 4px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1em;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.7);
      transition: 0.2s;
      font-size: 1.2em;
      :hover {
        color: ${Theme.colors.secondaryBg};
      }
    }
  }
`;
