import React, { Component } from 'react'
import NavBar from '../layout/NavBar.jsx'
import './NotFoundPage.scss'
import notFoundIcon from '../../svg/notFoundIcon.svg'
export default class NotFoundPage extends Component {
    render() {
        return (
            <div id="not-found-page">
                <NavBar/>
                <div id="not-found-content">
                    <img src={notFoundIcon} alt="not-found"/>
                </div>
            </div>
        )
    }
}
