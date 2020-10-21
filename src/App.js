import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar.jsx'
import DashBoard from './components/dashboard/DashBoard.jsx'
import PostDetail from './components/post/PostDetail.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'
import CreatePost from './components/post/CreatePost.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/post/:id" component={PostDetail}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/create-post" component={CreatePost}/>

        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
