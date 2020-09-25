import React, { memo } from 'react';
import './Container.scss';

export const Container = memo(({ children, className = '' }) => (
  <div className={'container ' + className}>
    { children }
  </div>
));
