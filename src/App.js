import React, { useState } from 'react';
import './App.scss';
import { Messages } from './components/Messages';
import { Footer } from './components/Footer';
import { MessagesContext } from './messages-context';
import { getMessages as apiGetMessages, sendMessage as apiSendMessage } from './services/messages';
import formatDate from '@bitty/format-date';

function App() {
  const shapeState = (messages) => ({
    messages,
    sendMessage,
    getMessages,
  });

  const sendMessage = (message) => {
    apiSendMessage(message).then(getMessages);
  };

  const getMessages = () => {
    apiGetMessages().then((messages) => {
      messages = messages.map((message) => ({
        ...message,
        timestamp: formatDate(new Date(message.timestamp), 'DD.MM.YYYY HH:MM'),
      }));

      setState(shapeState(messages));
    });
  };

  const [state, setState] = useState({
    messages: [],
    sendMessage,
    getMessages,
  });

  return (
    <div className="app">
      <MessagesContext.Provider value={state}>
        <Messages />
        <Footer />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
