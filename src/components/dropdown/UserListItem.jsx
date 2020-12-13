import React, {useState} from 'react'
import defaultAvatar from '../../images/defaultAvatar.png'
import './UserListItem.scss'



const User = ({user}) => {
        const [isFollowed, setIsFollowed] = useState(false)
        let icon; 
        if(!isFollowed)
        {
            icon ='+ ';
        }   
        else{
            icon ='';
        }
        return (
        <span className="user">
            <img className='useravatar' src={user.avatar || defaultAvatar} alt="avatar"/>
            <div className ="userName"> {user.displayName}</div>
            <button style = {{backgroundColor: `${isFollowed ? '#A7CBB6': '#C4C4C4' }`}} onClick ={() => {setIsFollowed(!isFollowed)}}> 
                <span>
                    <span className='icon'>{icon}</span>
                    {
                        isFollowed ? 'Following': 'Follow'
                    }
                </span>
            </button>
        </span>
    ) 
    
}

export default User