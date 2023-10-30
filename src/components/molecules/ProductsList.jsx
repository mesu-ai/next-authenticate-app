import { useRouter } from 'next/router';
import React from 'react';
import { getAccessToken } from '../../utils/cookies';


const ProductsList = () => {
  const token = getAccessToken();
  const router=useRouter();
  // console.log(router);
  

  if(!token){
    console.log('no token')
    // return router.push('/login');

    if (router.isFallback) {
      return <div>Loading...</div>
    }

  }

 
  return (
    <div>
      ProductList page 
    </div>
  );
};

export default ProductsList;