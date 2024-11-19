import React from "react";
function Post(props) {
  return (
    <>
      <article>
        <strong>{props.Post.title}</strong>
        <br />
        <small>{props.Post.subTitle}</small>
      </article>
      <br />
    </>
  );
}
export default Post;
