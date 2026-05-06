import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}
