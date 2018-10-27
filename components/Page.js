import Head from 'next/head';
import React from 'react';
import { Provider } from 'rebass';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Header from './Header';

const PageContainer = styled.div``;

const Page = ({ children, title, description }) => {
  return (
    <PageContainer>
      <Provider>
        <Head>
          <title>{title || 'How to JavaScript'}</title>
          <meta
            name="description"
            content={
              description ||
              'Learn how to solve different problems in JavaScript.'
            }
          />
        </Head>
        <GlobalStyle />
        <Header />
        {children}
      </Provider>
    </PageContainer>
  );
};

export default Page;
