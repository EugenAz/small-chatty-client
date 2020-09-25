import React, { memo } from 'react';

import './MessageInput.scss';
import { Container } from './Container';
import { MessagesContext } from '../messages-context';

export const MessageInput = memo(() => {
  let textareaEl = '';

  const submitMessage = (sendMessage) => {
    const message = textareaEl.value.trim();
    if (message.length) {
      sendMessage(message);
      textareaEl.value = '';
    }
  }

  return (
    <MessagesContext.Consumer>
      {({ sendMessage }) => {
        return (
          <Container className="message-input">
            <textarea
              className="message-input__input"
              placeholder="Message"
              ref={el => textareaEl = el}
            ></textarea>
            <button
              className="message-input__send-btn"
              onClick={() => submitMessage(sendMessage)}
            >Send</button>
          </Container>
        );
      }}
    </MessagesContext.Consumer>
  );
});
