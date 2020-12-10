import React, {useState} from 'react'
import defaultAvatar from '../../images/defaultAvatar.png'
import ireneImage from '../../images/ireneImage.jpg'
import './User.scss'



const User = ({post}) => {
        const [text,setText]= useState('Follow');   
        let icon; 
        if(text == 'Follow')
        {
            icon ='+ ';
        }   
        else{
            icon ='';
        }
        return (
        <span className="user">
            <img className='useravatar' src={ireneImage|| defaultAvatar} alt="avatar"/>
            <div className ="userName"> {post}</div>
            <button onClick ={() =>setText(text =='Follow'? 'Following': 'Follow')}> 
            <span>
                <span className='icon'>{icon}</span>
                {text}
            </span>
            </button>
        </span>
    ) 
    
}

export default User