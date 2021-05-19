function LargePost(props) {
    console.log(props, [1,2,3])
    return (
        <div>
            <h1>{props.selectedPost.header}</h1>
            <p>{props.selectedPost.text}</p>
            <img style={{float: "left"}} src={props.image} alt={"Image"}/>
        </div>
    )
}

export default LargePost;
