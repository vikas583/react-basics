import React, { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return (<>Please login!</>)
    } else {
        return (
            <div>Profile: {user.username}</div>
        )
    }


}

export default Profile