import React, { memo } from 'react';
import { Container } from './Container';
import { Message } from './Message';

import './Messages.scss';

export const Messages = memo(() => (
  <Container className="messages">
    <Message
      author="martin57"
      text="Thanks Peter"
      timestamp="10 Mar 2018 10:19"
    />
    <Message
      author="martin57"
      text="THANKS!!"
      timestamp="10 Mar 2018 10:20"
    />
    <Message
      own
      text="Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute."
      timestamp="10 Mar 2018 10:21"
    />
  </Container>
));
