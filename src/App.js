import React from "react";
import Post from "./Post";

function App() {
  return (
    <>
      <h1>Agos React blog </h1>
      <h2> Post off the week</h2>
      <hr />
      <Post
        post={{
          title: "Title",
          subTitle: "Subtitle",
        }}
      ></Post>
    </>
  );
}
export default App;
