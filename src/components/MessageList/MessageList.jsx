import React from 'react';
// eslint-disable-next-line no-unused-vars
export function MessageList(props, { handleMessages }) {
  return (
    <ul>
      {props.messageList.map((message, index) => (
        <li key={index} data-testid="message">
          {message.name}:{message.message}
        </li>
      ))}
    </ul>
  );
}
