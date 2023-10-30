import React from 'react';

const headerRoutes=[
  {name:'Home',pathName:'/'},
  {name:'Products',pathName:'/products'},
  {name:'Login',pathName:'/login'},
  // {name:'Product Update',pathName:'/product-update'},
]

const Header = () => {
  return (
    <nav className='bg-sky-500 text-white py-2'>
     <ul className='container mx-auto flex justify-between'>
      {headerRoutes.map((item,index)=>
       <li key={index}>{item?.name}</li>
      )}
     </ul>
    </nav>
  );
};

export default Header;