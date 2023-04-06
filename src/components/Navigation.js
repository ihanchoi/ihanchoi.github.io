import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { color, mq } from "../theme";

const Container = styled.div`
  transition: background-color 0.5s;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 60px;
  left: 60px;
  top: 60px;

  ${mq["md"]} {
    left: 30px;
    top: 30px;
  }
`;

const NavLink = styled.a`
  color: ${color.deepGrey};
  font-size: 18px;
  padding-right: 20px;

  :hover {
    color: ${color.appleBlue};
  }
`;

const NavGithub = styled.a`
  position: absolute;
  height: 60px;
  right: 60px;
  top: 60px;
  color: ${color.deepGrey};
  font-size: 18px;

  :hover {
    color: ${color.appleBlue};
  }

  ${mq["md"]} {
    right: 30px;
    top: 30px;
  }
`;

const Navigation = () => {
  return (
    <Container>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="https://github.com/ihanchoi/blog-han.dev">Blog</NavLink>
      </NavItems>
      <NavGithub href="https://github.com/ihanchoi">
        <FontAwesomeIcon icon={faGithub} /> ihanchoi.dev
      </NavGithub>
    </Container>
  );
};

export default Navigation;
