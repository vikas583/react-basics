import React, { useContext } from "react"
import UserContext from "../context/UserContext"

const Login = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username })
    }

    return (
        <>
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Login