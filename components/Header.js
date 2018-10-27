import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Heading, NavLink, Toolbar } from 'rebass';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const Header = ({}) => {
  return (
    <HeaderContainer>
      <Toolbar>
        <NavLink />
        <Heading>How to JavaScript</Heading>
        <NavLink
          href="https://github.com/howtojs/website"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub />
        </NavLink>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
