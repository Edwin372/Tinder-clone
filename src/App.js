import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DashBoard from './components/dashboard/DashBoard.jsx'
import PostDetail from './components/post/PostDetail.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'
import CreatePost from './components/post/CreatePost.jsx'
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'
import SignUpOptions from './components/auth/SignUpOptions.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signup-options" component={SignUpOptions}/>
          <ProtectedRoute path="/post/:id" component={PostDetail}/>
          <ProtectedRoute path="/create-post" component={CreatePost}/>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
