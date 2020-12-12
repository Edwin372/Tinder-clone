import React, { Component } from 'react'
import searchIcon from "../../svg/searchIcon.svg";
import './SearchInput.scss'

export default class SearchInput extends Component {
    state = {
        isSearching: false
    }

    render() {
        return (
            <div id="search-component-container">
                <input placeholder="Search for people or articles" id="search-input"  className={`${this.state.isSearching ? 'shown': 'hide'}`} type="text"/>
                <button id="search-btn" className="signin-navbar-button" onClick={() => {this.setState({isSearching: !this.state.isSearching})}}>
                  <img src={searchIcon} alt="search icon" />
                </button>
            </div>
        )
    }
}
