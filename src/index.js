import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./header";
import Post from "./post";

import "./reset.css";
import "./style.css";

class App extends Component {
    state = {
        posts: []
    };

    render() {
        return (
            <Fragment>
                <Header />
                <section className="content">
                    <Post />
                    <Post />
                    <Post />
                </section>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));
