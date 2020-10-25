import React from 'react'
import './SocialAccountBtn.scss'

export default function SocialAccountBtn({onClick,id }) {
    return (
      <button className="social-account-btn" id={id} onClick={onClick}>{}</button>
    )
}
