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
  max-width: 700px;

  border-radius: 10px;
  margin: 0 auto;
  background-color: ${Theme.colors.mainBg};

  .close {
    position: absolute;
    background: none;
    right: 1.2em;
    top: 0.5em;
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

  form {
    display: flex;
    flex-direction: column;

    padding: 1em;
    gap: 1.2em;

    height: 100%;
    width: 100%;

    div {
      display: flex;
      position: relative;
      gap: 2em;
      width: 100%;
      margin-bottom: 1.2em;

      button {
        width: 50%;
        height: 3em;

        background-color: ${Theme.colors.secondaryBg};
        color: ${Theme.colors.mainBg};
        font-size: 1em;
        font-weight: 600;

        border-radius: 5px;
        box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

        cursor: pointer;
        transition: 0.4s;

        :hover {
          opacity: 0.8;
          transform: scale(1.03);
        }
      }
    }

    textarea {
      width: 100%;
      height: 60%;

      border-radius: 5px;
      border: 1px solid ${Theme.colors.smoothGray};
      box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

      padding: 1.2em;
      outline: none;

      font-size: 1em;

      ::placeholder {
        color: ${Theme.colors.smoothGray};
      }
    }
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
    transition: 0.4s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
