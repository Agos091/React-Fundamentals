import React from "react";
function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subTitle}</small>
      </article>
      <br />
    </>
  );
}
export default Post;
