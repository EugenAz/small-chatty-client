import React, { memo } from 'react';
import classNames from 'classnames';

import './Message.scss';

export const Message = memo(({ author, text, timestamp, own = false }) => {
  const cn = classNames('message', { 'message--own': own });

  return (
    <div className={cn}>
      {author &&
        <span className="message__author">{ author }</span>
      }
      <span className="message__text">{ text }</span>
      <span className="message__timestamp">{ timestamp }</span>
    </div>
  );
});
