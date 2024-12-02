import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [posts, setPosts] = useState([
    { id: uuidv4(), title: 'Title#01', subTitle: 'Sub#01', likes: 10 },
    { id: uuidv4(), title: 'Title#02', subTitle: 'Sub#02', likes: 20 },
    { id: uuidv4(), title: 'Title#03', subTitle: 'Sub#03', likes: 30 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        title: `Title#0${prevState.length + 1}`,
        subTitle: `Sub#0${prevState.length + 1}`,
        likes: 10,
      },
    ]);
  }
  return (
    <>
      <Header Header title="Agos blog">
        <h2>
          Post off the week
          <button onClick={handleRefresh}>Add more one post</button>
        </h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subTitle: post.subTitle,
          }}
        ></Post>
      ))}
    </>
  );
}
export default App;
