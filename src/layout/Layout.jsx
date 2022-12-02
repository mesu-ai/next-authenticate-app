import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto min-h-screen flex flex-col justify-between'>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
