import { useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"

export default function Header() {
    const {setUserInfo,userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('http://45.77.23.190:4000/profile', {
             credentials: 'include',
        }).then(Response => {
            Response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, [])

    function logout() {
        fetch('http://45.77.23.190:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;
    
    return (
        <header>
            <Link to="/" className="logo">MyBog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}