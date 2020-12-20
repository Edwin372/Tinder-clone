import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DashBoard from './components/pages/DashBoard.jsx'
import ReadPostPage from './components/pages/ReadPostPage.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'
import CreatePost from './components/pages/CreatePostPage.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import SignUpOptions from './components/auth/SignUpOptions.jsx'
import VerificationSuccess from './components/auth/VerificationSuccess.jsx'
import Verification from './components/auth/Verification.jsx'
import SearchResult from './components/pages/SearchResultPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signup-options" component={SignUpOptions}/>
          <Route path="/verify" component={Verification}/>
          <Route path="/verify-action" component={VerificationSuccess}/>
          <ProtectedRoute path="/post/:id" component={ReadPostPage}/>
          <ProtectedRoute path="/create-post" component={CreatePost}/>
          <ProtectedRoute path="/search-result" component={SearchResult}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
