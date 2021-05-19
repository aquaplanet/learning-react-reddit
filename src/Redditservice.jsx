import React from "react";

const LOREMIPSUM =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna nulla, placerat vel placerat a, imperdiet vel mi. Curabitur nec leo sollicitudin, viverra tortor non, vulputate tellus. Curabitur sem tortor, tempus eget leo et, ultricies auctor turpis. Maecenas augue lacus, condimentum eget mauris eu, molestie laoreet ante. Fusce vitae vestibulum orci. Sed non posuere diam. Etiam vitae sem quis felis egestas sollicitudin. Nullam euismod leo iaculis, vehicula dolor et, mattis justo. Morbi dapibus libero et interdum auctor. Nunc pretium mauris vitae felis accumsan, a pharetra ante tincidunt. Curabitur cursus aliquet nunc vitae consectetur. Integer in mauris a turpis ornare vestibulum at et leo.\n" +
    "\n" +
    "Nam aliquet luctus neque vel egestas. Aenean sed aliquet nibh. Ut feugiat mi eu eros egestas laoreet. Nunc semper sapien id magna lobortis varius ut eu turpis. Aenean bibendum ante sed lectus lacinia condimentum. In sit amet mauris ut turpis maximus placerat vel eget turpis. Vestibulum quis dolor ornare, elementum est vel, ultricies lacus. Duis vel urna eleifend, varius libero a, consectetur mi. Sed varius neque eu massa congue egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sed porttitor lorem, in commodo magna.\n" +
    "\n" +
    "Nulla facilisi. Integer vestibulum non massa bibendum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent rhoncus pretium nisl ac eleifend. Vivamus magna tellus, sollicitudin nec lorem ut, fermentum sagittis dolor. Nunc vel metus nulla. Morbi ultricies orci neque, ut bibendum nisi pellentesque in. Morbi vel aliquet lorem, sit amet tincidunt felis. Suspendisse at velit vulputate, tincidunt erat vitae, maximus mauris. Ut ut purus posuere, lobortis arcu quis, efficitur lacus. Nunc quis lobortis nisi. Proin ullamcorper augue id felis posuere porta. In ac nunc a nibh bibendum mattis vel sit amet dui. Curabitur ut arcu nibh.\n" +
    "\n" +
    "Vivamus enim magna, iaculis eget ante ac, scelerisque dictum nulla. Mauris ultricies elementum erat in tristique. Vestibulum dui mauris, sollicitudin et urna eu, semper tincidunt ex. Maecenas quis dolor rhoncus, luctus sem at, interdum sem. Fusce sollicitudin massa consectetur nisi lacinia, eget blandit lacus tempus. Ut a quam dignissim ante tempus tempor quis ut lorem. Fusce tincidunt nulla eu felis feugiat lacinia. Donec sit amet tincidunt tellus. Sed sit amet neque neque. Suspendisse interdum dapibus nisi nec placerat. Morbi vel bibendum ligula, eget mollis quam. Fusce tristique enim convallis elit fermentum scelerisque non in arcu. Nullam convallis fringilla tortor id facilisis.\n" +
    "\n" +
    "In nec neque vel nibh sollicitudin blandit nec non lorem. Aenean scelerisque ligula sit amet lorem volutpat, sit amet tempus erat auctor. Morbi pellentesque magna id enim lobortis vestibulum. Proin quis erat suscipit, vestibulum magna nec, maximus lacus. Phasellus feugiat dolor id justo vestibulum tempor. Mauris pulvinar elit a dolor rhoncus sodales. Sed maximus quam purus. Pellentesque elementum sapien sed lorem facilisis imperdiet. "

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

    fetchPostsFromReddit(subreddit) {
        function houseCleaning(jsonPost) {
            return {
                header: jsonPost.data.title,
                text: LOREMIPSUM.substr(0, 50),
                image: jsonPost.data.thumbnail,
            }

        }

        fetch(`https://www.reddit.com/r/${subreddit}/.json`)
            .then(value => value.json())
            .then(value => value.data.children.map(houseCleaning))
            .then(value => this.setState({posts: value}))
            .then(() => this.setState({selectedPost: this.state.posts.slice(0,1)}))
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
