import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";

const Post = props => (
    <div className="post">
        <PostHeader
            uriImg={props.data.uriImg}
            author={props.data.author}
            time={props.data.time}
        />
        <hr />
        <p>{props.data.content}</p>
    </div>
);

Post.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        uriImg: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired
};

export default Post;
