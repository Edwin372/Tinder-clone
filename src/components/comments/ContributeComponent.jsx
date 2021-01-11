import React, { Component } from 'react'
import ContributeButton from '../buttons/ContributeButton.jsx'
import ContributeDropdown from '../dropdown/ContributeDropdown.jsx'

export default class ContributeComponent extends Component {
    render() {
        const {userId, contentId, contributors} = this.props
        return (
            <div id="contribute-component" style={{...this.props.style}}>
                <ContributeButton userId={userId} contentId={contentId}/>
                <ContributeDropdown contributors={contributors}/>
            </div>
        )
    }
}
