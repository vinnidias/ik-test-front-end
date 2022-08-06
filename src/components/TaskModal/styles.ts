import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(25px);
  padding: 2rem;
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  width: 100%;
  height: 100%;
  padding: 1em 0;

  border-radius: 10px;
  margin: 0 auto;
  background-color: ${Theme.colors.mainBg};

  .close {
    position: absolute;
    right: 1.2em;
    top: 1em;
    cursor: pointer;
    font-size: 1.2em;
    transition: 0.4s;

    :hover {
      transform: scale(1.2);
    }
  }

  h2 {
    color: ${Theme.colors.secondaryBg};
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 10%;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 70%;

  textarea {
    width: 95%;
    background-color: ${Theme.colors.smoothGray};
    height: 68%;
    color: #000;
    padding: 1em;
  }
`;

export const DateSection = styled.section`
  width: 100%;
  display: flex;
  gap: 2em;
  padding: 2em;

  span {
    font-size: 1.2em;

    input {
      font-weight: 600;
      background: none;
      outline: none;
      text-align: center;
    }
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
  
  width: 95%;
  height: 10%;

  gap: 1.2em;
  padding-top: 0.2em;

  button {
    cursor: pointer;
    color: ${Theme.colors.mainBg};
    background-color: ${Theme.colors.secondaryBg};

    height: 90%;
    width: 25%;
    max-width: 150px;

    border-radius: 5px;
    box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);
    transition: .4s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
