import React, { Component } from "react";
import batman from "./images/batman.jpg";

export default class PostHeader extends Component {
    render() {
        return (
            <div className="postHeader">
                <img src="https://avatars3.githubusercontent.com/u/935026?s=460&v=4" />
                <div className="author">
                    <h1>Carlos Viana</h1>
                    <p>há 1 hora</p>
                </div>
            </div>
        );
    }
}
