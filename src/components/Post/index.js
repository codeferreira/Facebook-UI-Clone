import React from 'react';
import Comment from '../Comment';
import './style.css'

function Post({ post }) {
  return(
    <div key={post.id} className="card">
      <div className="user">  
        <img className="avatar" src={post.author.avatar} alt="avatar"/>
        <p className="author">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </p>
      </div>
      <p className="content">{post.content}</p>
      <hr/>
      {
        post.comments.map(comment => <Comment comment={comment}/>)
      }
    </div>
  )
}

export default Post;