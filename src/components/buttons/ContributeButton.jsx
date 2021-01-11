import React, { Component } from 'react'
import './ContributeButton.scss'

export default class ContributeButton extends Component {

   handleContribute = (userId, contentId) => {
       console.log(userId, contentId)
   }
    render() {
        return (
            <button id="contribute-button" onClick={() => this.handleContribute(this.props.userId, this.props.contentId)}>
                Contribution request
            </button>
        )
    }
}
