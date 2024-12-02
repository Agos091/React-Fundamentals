import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
        <br />
        <small>{props.post.subTitle}</small>
      </article>
      <br />
    </>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default Post;
