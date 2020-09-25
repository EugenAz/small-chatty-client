import React, { memo } from 'react';

import './MessageInput.scss';
import { Container } from './Container';

export const MessageInput = memo(() => (
  <Container className="message-input">
    <textarea className="message-input__input"></textarea>
    <button className="message-input__send-btn">Send</button>
  </Container>
));
