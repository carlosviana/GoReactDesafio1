import React from "react";
import PropTypes from "prop-types";

const PostHeader = props => (
    <div className="postHeader">
        <img src={props.uriImg} />
        <div className="author">
            <h1>{props.author}</h1>
            <p>{props.time}</p>
        </div>
    </div>
);

PostHeader.propTypes = {
    author: PropTypes.string.isRequired,
    uriImg: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default PostHeader;
