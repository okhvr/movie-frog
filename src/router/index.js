import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config'

export default () => {
  return (
    <BrowserRouter>
        {renderRoutes(Routes)}
    </BrowserRouter>
  );
};