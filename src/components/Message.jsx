import React from 'react';
import './Message.css';

const Message = ({mess, stats, click}) => {
  return (
    <div className='Message-container'>
      <div className="Message">
        <div className={stats==="200"? 'Message-text':'Message-text-danger'}>{mess}</div>
        <div className={stats==="200"? 'Message-btn':'Message-btn-danger'} onClick={click}>Close</div>
      </div>
    </div>
  );
}

export default Message;
