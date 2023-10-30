import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <div className='container mx-auto'>
        <Main>{children}</Main>
      </div>  
      <Footer />
    </div>
  );
};

export default Layout;
