import React from 'react';

import './style.css'

function Comment({ comment }) {
  return(
    <div key={comment.id} className="comment">
      <div className="user">  
        <img className="avatar" src={comment.author.avatar} alt="avatar"/>
      </div>
      <div className="content">
        <p className="text">
          <strong>{comment.author.name}</strong>
          {comment.content}
        </p>
      </div>
    </div>
  )
}

export default Comment;