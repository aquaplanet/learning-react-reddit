import React from "react";

class RedditService extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            subreddit: props.subreddit,
            selectedPost: {},
            posts: []
        }
    }


    componentDidMount() {
        this.fetchPostsFromReddit(this.props.subreddit);
    }



    render() {
        return React.Children.map(this.props.children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {posts: this.state.posts, selectedPost: this.state.selectedPost})
            }
            return child;
        });
    }
}


export default RedditService;
