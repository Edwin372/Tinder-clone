import React, {Component} from 'react'
import './Profile.scss'

export default class Series extends Component {
    state={
        change: false,
        changeGmail: false,
        changeName: false,
        changeDOB: false,
        changeJob: false,
        changeWork: false,
        changeBio: false,
        failed: false,
        pass: this.props.profile.pass,
        gmail: this.props.profile.gmail,
        displayName: this.props.profile.displayName,
        dob: this.props.profile.dob,
        job: this.props.profile.job,
        work: this.props.profile.work,
        bio: this.props.profile.bio,
    }

    ChangePassword = () => {
        var password = document.getElementById('new-pass-content').value;
        var confirmPassword = document.getElementById('confirm-pass-content').value;
        if(password === ""){
            this.setState({failed: true});
        }
        else if(password !== confirmPassword){
            this.setState({failed: true});
        }  
        else{
            this.setState({ failed: false, change: false, pass : document.getElementById('new-pass-content').value});
            document.getElementById('new-pass-content').value = '';
            document.getElementById('confirm-pass-content').value = '';
            alert("Password changed successfully");
        }
    }
    handleCancel = () => {
        this.setState({change: !this.state.change, failed: false});
        document.getElementById('new-pass-content').value = '';
        document.getElementById('confirm-pass-content').value = '';
    }

    ChangeGmail = () => {
        this.setState({changeGmail: false, gmail: document.getElementById('new-gmail').value})
    }

    ChangeName = () => {
        this.setState({changeName: false, displayName: document.getElementById('new-username').value})
    }

    ChangeDOB = () => {
        this.setState({changeDOB: false, dob: document.getElementById('new-dob').value})
    }

    ChangeJob = () => {
        this.setState({changeJob: false, job: document.getElementById('new-job').value})
    }

    ChangeWork = () => {
        this.setState({changeWork: false, work: document.getElementById('new-work').value})
    }

    ChangeBio = () => {
        this.setState({changeBio: false, bio: document.getElementById('new-bio').value})
    }
    render() {
        return(
            <div className="profile">

                {/* gmail */}
                {
                    !this.state.changeGmail?
                    <div className="gmail">
                        <span>Gmail</span>
                        <div>
                            <p>{this.state.gmail||''}</p>
                        </div>
                        <button onClick={() => {this.setState({changeGmail: !this.state.changeGmail})}}>Change</button>
                    </div>:
                    <div className="gmail">
                        <span>Gmail</span>
                        <input 
                        id="new-gmail"
                        type="text"
                        defaultValue={this.state.gmail}
                        />
                        <button id="save-gmail" onClick={this.ChangeGmail}>Save</button>
                    </div>
                }

                {/* UserName */}
                {
                    !this.state.changeName?
                    <div className="username">
                        <span>Username</span>
                        <div>
                            <p>{this.state.displayName||''}</p>
                        </div>
                        <button onClick={() => {this.setState({changeName: !this.state.changeName})}}>Change</button>
                    </div>:
                    <div className="username">
                        <span>Username</span>
                        <input 
                        id="new-username"
                        type="text"
                        defaultValue={this.state.displayName}
                        />
                        <button id="save-username" onClick={this.ChangeName}>Save</button>
                    </div>
                }

                {/* DOB */}
                {
                    !this.state.changeDOB?
                    <div className="dob">
                        <span>Date of birth</span>
                        <div>
                            <p>{this.state.dob||''}</p>
                        </div>
                        <button onClick={() => {this.setState({changeDOB: !this.state.changeDOB})}}>Change</button>
                    </div>:
                    <div className="dob">
                        <span>Date of birth</span>
                        <input 
                        id="new-dob"
                        type="text"
                        defaultValue={this.state.dob}
                        />
                        <button id="save-dob" onClick={this.ChangeDOB}>Save</button>
                    </div>
                }

                {/* Password */}
                <div className="pass-container">
                    <div className="pass">
                        <span id="password">Password</span>
                        <input readOnly type="password" value={this.state.pass||''}></input>
                        {   
                            this.state.change?
                            <span>
                                <button id="save-pass" onClick={this.ChangePassword}>Save</button>
                                <button id="cancel" onClick={this.handleCancel}>Cancel</button>
                            </span>
                            :   
                            <button id="change" onClick={() => {this.setState({change: !this.state.change})}}>Change</button>
                        }
                    </div>
                    <div className={`${this.state.change ? "visible-pass" : "hidden-pass"}`}>
                        <div>
                            <span id="new-pass">New password</span>
                            <input type="password" id="new-pass-content"/>
                        </div>
                        <div>
                            <span id="new-pass">Confirm password</span>
                            <input type="password" id="confirm-pass-content" />
                        </div>
                        <div className={`${this.state.failed ? "visible-failed" : "hidden-failed"}`}>
                            <p>Changing password failed</p>
                        </div>
                    </div>
                </div>

                {/* Job */}
                {
                    !this.state.changeJob?
                    <div className="job">
                        <span>Job</span>
                        <div>
                            <p>{this.state.job||''}</p>
                        </div>
                        <button onClick={() => {this.setState({changeJob: !this.state.changeJob})}}>Change</button>
                    </div>:
                    <div className="job">
                        <span>Job</span>
                        <input 
                        id="new-job"
                        type="text"
                        defaultValue={this.state.job}
                        />
                        <button id="save-job" onClick={this.ChangeJob}>Save</button>
                    </div>
                }

                {/* Work */}
                {
                    !this.state.changeWork?
                    <div className="work">
                        <span>Work at</span>
                        <div>
                            <p>{this.state.work||''}</p>
                        </div>
                        <button onClick={() => {this.setState({changeWork: !this.state.changeWork})}}>Change</button>
                    </div>:
                    <div className="work">
                        <span>Work at</span>
                        <input 
                        id="new-work"
                        type="text"
                        defaultValue={this.state.work}
                        />
                        <button id="save-work" onClick={this.ChangeWork}>Save</button>
                    </div>
                }

                {/* Bio */}
                {
                    !this.state.changeBio?
                    <div className="bio">
                        <span>Bio</span>
                        <textarea readOnly id="bio-profile">{this.state.bio || ''}</textarea>
                        <button onClick={() => {this.setState({changeBio: !this.state.changeBio})}}>Change</button>
                    </div>:
                    <div className="bio">
                        <span>Bio</span>
                        <textarea 
                        id="new-bio"
                        defaultValue={this.state.bio}
                        ></textarea>
                        <button id="save-bio" onClick={this.ChangeBio}>Save</button>
                    </div>
                }
            </div>
        )
    }
}