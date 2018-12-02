import React, { Component } from "react";

import PostHeader from "./postHeader";

export default class Post extends Component {
    render() {
        return (
            <article className="post">
                <PostHeader />
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec orci quam, pellentesque et felis a, aliquam pulvinar
                    purus. Proin sed pretium velit. Nullam lacinia, tortor ut
                    fringilla interdum, elit erat ultrices metus, eget
                    consectetur ipsum dui vel eros. Ut aliquet elementum urna.
                    Aliquam volutpat pharetra porttitor. Praesent blandit
                    hendrerit quam, in vulputate felis consectetur sed. In
                    aliquet nibh in massa blandit gravida. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Proin hendrerit molestie felis, vitae interdum velit
                    fringilla et. Etiam maximus est vitae mauris luctus, ac
                    pretium sapien mollis. Pellentesque vel purus et tellus
                    euismod aliquet. Maecenas eu fringilla justo, in volutpat
                    eros. Integer et ante eros.
                </p>
            </article>
        );
    }
}
