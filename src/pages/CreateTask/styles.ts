import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.mainBg};
  align-items: center;
  padding: 3.6em 3em;
  gap: 1.4rem;

  h1 {
    color: ${Theme.colors.secondaryBg};
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 1em;
    padding: 1.2em;

    width: 100%;
    height: 100%;
    max-width: 700px;

    background-color: #fff;
    border-radius: 8px;
    box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

    textarea {
      width: 100%;
      height: 60%;

      border: 1px solid ${Theme.colors.smoothGray};
      border-radius: 5px;
      box-shadow: 15px 15px 15px -5px rgba(0, 0, 0, 0.1);

      padding: 1em;
      outline: none;

      font-size: 1em;
    }

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
`;

export const DateSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1em;
`;
