import React from 'react';
import PropTypes from 'prop-types';

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
Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }).isRequired,
};
export default Post;
