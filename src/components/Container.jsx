import React, { memo } from 'react';
import classNames from 'classnames';

import './Container.scss';

export const Container = memo(({ children, className = '' }) => {
  const cn = classNames('container', className)

  return (
    <div className={cn}>
      { children }
    </div>
  );
});
