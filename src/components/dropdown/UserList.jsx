import React, {useState } from 'react'
// import { connect } from 'react-redux'
import User from './UserListItem'
import { Link } from 'react-router-dom'
import './UserList.scss'

const UserList=({users=[]}) =>{
    const [text,setText]=useState('See more');

    users = users && users.filter((item, index) => users.indexOf(item) === index)
    let tempt = [];
    let icon; 
        if(text === 'See more')
        {
            icon ='+ ';
        }   
        else{
            icon ='';
        }
    if(text === 'See more' )
    {
        tempt = users.slice(0,3);
    }
    else
    {
        tempt= users;
    }
    return (
        <div className="user-list-container">
            <div className ="title">People</div>
            <div id = 'user-list'>
                {tempt.map(user => {
                    return (
                        <Link className="route-link">
                            <User user={user} />
                        </Link>
                    )
                    })
                }  
            </div>
                { (users.length > 3)
                    ?(
                        <button className="expand" onClick ={() => setText(text === 'See less' ? 'See more' : 'See less')}>
                           <span>
                               <span className='icon'>{icon}</span>
                               {text}
                           </span>
                        </button>
                    )
                    : null
                }
        </div>
    )
}

export default UserList





    