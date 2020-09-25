import React, { memo, useState } from 'react';
import { MessagesContext } from '../messages-context';
import { Container } from './Container';
import { Message } from './Message';

import './Messages.scss';

export const Messages = memo(() => {
  const [initialized, setInitialized] = useState(false);

  return (
    <MessagesContext.Consumer>
      {({ messages, getMessages }) => {
        if (!initialized) {
          getMessages();
          setInitialized(true);
        }
        return (
          <Container className="messages">
            {messages.map(({ _id, author, message, timestamp }) => (
              <Message
                key={_id}
                own={author === 'Eugen'}
                author={author}
                text={message}
                timestamp={timestamp}
              />
            ))}
          </Container>
        );
      }}
    </MessagesContext.Consumer>
  );
});
