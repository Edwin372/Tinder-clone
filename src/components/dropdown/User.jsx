import React, {useState} from 'react'
import defaultAvatar from '../../images/defaultAvatar.png'
import './User.scss'



const User = ({post}) => {
        const [text,setText]= useState('+Follow');       
        return (
        <span className="user">
            <img src={post.avatar|| defaultAvatar} alt="avatar"/>
            <div className ="userName"> {post}</div>
            <button onClick ={() =>setText(text =='+Follow'? 'Following': '+Follow')}> 
            {text}
            </button>
        </span>
    ) 
    
}

export default User