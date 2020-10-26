import React from 'react'
import './SocialAccountBtn.scss'

export default function SocialAccountBtn({onClick,id }) {
    return (
      <button className="social-account-btn" id='verify-btn' onClick={onClick}>{}</button>
    )
}
