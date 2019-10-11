import React, { useState } from 'react';

import Header from './components/Header';
import  Post from './components/Post';

function App() {
  const [posts,] = useState([
    {
      id: 1,
      author: {
        name: 'José Carlos Ferreira',
        avatar: 'https://avatars2.githubusercontent.com/u/25153766?s=460&v=4'
      },
      date: '04 Jun 2019',
      content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      comments: [
        {
          id: 1,
          author: {
            name: 'Robson Marques',
            avatar: 'https://avatars2.githubusercontent.com/u/861751?s=460&v=4'
          },
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis risus lectus, vel cursus sem egestas sit amet. Donec eu mi tristique, placerat lacus non, sollicitudin lacus."
        }
      ],
    }
  ])

  return (
    <>
      <Header />
      {
        posts.map(post => <Post post={post} />)
      }
      
    </>
  );
}

export default App;
