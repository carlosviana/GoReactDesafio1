import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import "./style.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>teste</h1>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));
