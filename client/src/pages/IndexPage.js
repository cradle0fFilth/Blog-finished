import { useEffect, useState } from "react"
import Post from "../Post"
export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://45.77.23.190:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map(post => {
                return (
                    <Post {...post} />
                )
            })}
        </>
    )
}