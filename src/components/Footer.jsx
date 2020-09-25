import React, { memo } from 'react';

import './Footer.scss';
import { MessageInput } from './MessageInput';

export const Footer = memo(() => (
  <footer className="footer">
    <MessageInput />
  </footer>
));
