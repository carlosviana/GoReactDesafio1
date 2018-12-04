import React, { Component, Fragment } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
    state = {
        posts: [
            {
                id: 1,
                uriImg:
                    "https://avatars3.githubusercontent.com/u/935026?s=460&v=4",
                author: "Carlos Viana",
                time: "a 1 hora",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis purus in volutpat volutpat. Morbi a urna vitae tortor condimentum egestas. Donec accumsan, augue nec ultricies laoreet, massa elit vestibulum nisl, eget rhoncus ipsum justo a tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam dapibus ultrices lacinia. Cras venenatis fringilla dui vitae tempus. Aliquam commodo, libero ac ornare venenatis, augue ipsum commodo turpis, eu tincidunt orci turpis at sem. Morbi vulputate convallis dolor, a cursus nisl sagittis sit amet. Etiam elementum ac lorem sit amet maximus. Donec rutrum sem pretium nulla mattis malesuada. Cras elementum leo ligula. Nam varius, tortor vel luctus condimentum, ante urna sodales sem, sed maximus tortor massa in magna."
            },
            {
                id: 2,
                uriImg:
                    "https://avatars3.githubusercontent.com/u/935026?s=460&v=4",
                author: "Carlos Viana",
                time: "a 1 hora",
                content:
                    "Proin a dolor at nibh auctor finibus eu ut odio. Cras a blandit massa. Quisque congue sem id erat imperdiet, vitae fermentum elit dapibus. Fusce eu neque eu nisl pellentesque lobortis in elementum neque. Aliquam suscipit id lacus quis blandit. Maecenas nunc erat, tempus id ex ac, tristique tempor magna. Morbi purus ligula, luctus sit amet nisl eget, laoreet tempor ex. Aenean ac mollis arcu. Donec massa eros, ullamcorper nec ante id, sagittis vehicula urna."
            }
        ]
    };

    render() {
        const { posts } = this.state;

        return (
            <Fragment>
                <Header />
                <section className="content">
                    {posts.map(post => (
                        <Post key={post.id} data={post} />
                    ))}
                </section>
            </Fragment>
        );
    }
}
