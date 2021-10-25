import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import ProfilePage from "./components/ProfilePage";
import Register from "./components/Register";
import Login from "./components/Login";
import styled from 'styled-components'
import './App.css';

const MainBody = styled.div`
  display: flex;
`

function App() {
  return (

    <Router>

      <div className="App">

        

        <Switch>
          <Route path="/profile/:profilePageID" exact>
            <Header />
            <MainBody>
              <LeftSidebar />
              <ProfilePage />
            </MainBody>
          </Route>

          <Route path="/register" exact>
            <Register />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/" exact>
            <Header />
            <MainBody>
              <LeftSidebar />
              <Feed />
              <RightSidebar />
            </MainBody>
          </Route>
        </Switch>
      </div>
      
    </Router>
    
  );
}

export default App;
