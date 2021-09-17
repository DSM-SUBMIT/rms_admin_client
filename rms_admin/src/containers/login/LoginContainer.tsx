import React, { FC, Suspense } from 'react';
import { Login } from '../../components';

const LoginContainer: FC = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
        <Login/>
    </Suspense>
  )
}

export default LoginContainer;