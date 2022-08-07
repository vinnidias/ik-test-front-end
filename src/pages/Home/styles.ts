import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Link as RouterLink } from "react-router-dom";

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
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  padding: 1rem;

  @media (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${Theme.colors.mainBg};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${Theme.colors.smoothGray};
      border-radius: 13px;
      border: 0px groove ${Theme.colors.mainBg};
    }
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  padding: 0.8rem 4rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 30%;
  border-radius: 10px;
  font-size: clamp(0.875rem, 0.7714rem + 0.442vw, 1.125rem);

  box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);
  background-color: ${Theme.colors.smoothGray};

  cursor: pointer;
  transition: 0.4s;
  z-index: 100;

  strong {
    font-weight: 600;
    color: ${Theme.colors.secondaryBg};
  }

  p {
    font-weight: 600;
    color: ${Theme.colors.secondaryBg};
    display: flex;

    input {
      font-weight: 600;
      background: none;
      outline: none;
      margin-left: 0.6em;
    }
  }

  .title {
    text-align: end;
    font-weight: 600;
    word-spacing: 0.2rem;
    color: ${Theme.colors.secondaryBg};
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    text-align: end;
    font-weight: 600;
    word-spacing: 0.2rem;
  }

  :hover {
    background-color: ${Theme.colors.mainBg};
    transform: scale(1.01);
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1em;

    padding: 0.8em;
    margin-bottom: 2rem;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    font-size: clamp(0.875rem, 0.4088rem + 1.989vw, 2rem);

    box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);
    background-color: ${Theme.colors.smoothGray};
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-weight: 600;
  color: ${Theme.colors.mainBg};
  width: 20%;
  min-width: 220px;
  height: fit-content;
  text-align: center;
  padding: 0.8em;
  border-radius: 5px;
  background-color: ${Theme.colors.secondaryBg};
  transition: 0.4s;
  box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);

  :hover {
    transform: scale(0.96);
  }
`;
