import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div>Please login</div>
        )
    }
    else {
        if (!user?.username) return <div>Please provide Username</div>
        else if (!user?.password) return <div>Please provide Password</div>
        return (
            <div>Welcome, {user.username}</div>
        )
    }
}

export default Profile