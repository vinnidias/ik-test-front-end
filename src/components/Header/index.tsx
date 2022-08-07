import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/" className="link">
        <strong>
          <BiHome />
          Desafio
          <span>IK Tech</span>
        </strong>
      </Link>
      <ul>
        <li>
          <a
            href="https://github.com/vinnidias/ik-test-front-end"
            target="_blank"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vinicius-dias-santos-4901341a2/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </Container>
  );
};
