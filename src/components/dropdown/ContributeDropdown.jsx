import React, { Component } from 'react'
import './ContributeDropdown.scss'

export default class ContributeDropdown extends Component {
    render() {
        const {contributors}= this.props
        return (
            <div id="contribute-dropdown">
                <button 
                    id="toggle-contribute-list-btn" 
                    disabled={contributors.length? false: true}
                    onClick={() => {console.log()}}
                >
                    {contributors.length} {contributors.length > 1 ? 'contributors' : 'contributor'}
                </button>
                <div id='contributor-dropdown'>
                    {this.props.contributors.map(contributor => (
                        <div className="contributor-list-item"></div>
                    ))}
                    
                </div>
            </div>
        )
    }
}
