import React, { memo } from 'react';
import { Container } from './Container';

import './Messages.scss';

export const Messages = memo(() => (
  <Container className="messages">
    <div className="message">
      <span className="message__author">martin57</span>
      <span className="message__text">Thanks Peter</span>
      <span className="message__timestamp">10 Mar 2018 10:19</span>
    </div>
    <div className="message">
      <span className="message__author">martin57</span>
      <span className="message__text">Thanks Peter</span>
      <span className="message__timestamp">10 Mar 2018 10:19</span>
    </div>
    <div className="message message--own">
      <span className="message__text">Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute.</span>
      <span className="message__timestamp">10 Mar 2018 10:19</span>
    </div>
  </Container>
));
