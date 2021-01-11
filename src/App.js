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
import ProfilePage from './components/pages/ProfilePage.jsx'
import NotFound from './components/pages/NotFoundPage.jsx'
import DraftsPage from './components/pages/DraftsPages.jsx'
import EditPostPage from './components/pages/EditPostPage.jsx' 

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
          <ProtectedRoute path="/drafts/" component={DraftsPage}/>
          <ProtectedRoute path="/post/:id" component={ReadPostPage}/>
          <ProtectedRoute path="/draft/:id" component={CreatePost}/>
          <ProtectedRoute path="/create-post" component={CreatePost}/>
          <ProtectedRoute path="/search-result" component={SearchResult}/>
          <ProtectedRoute path="/profile/:id" component={ProfilePage}/>
          <ProtectedRoute path="/edit-post/:id" component={EditPostPage}/>
          <Route component={NotFound} />

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
