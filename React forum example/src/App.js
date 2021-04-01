import './App.css';
import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

// Imported components
import GetCategories from './components/API Integration/GetCategories'
import PostCategory from './components/API Integration/PostCategory'
import GetThreads from './components/API Integration/GetThreads'

function App() {

  const linkStyle = {
    border: "2px solid",
    margin: "5px",
    borderTop: "2px solid"
  };

  return (
    <div className="App">
        <Router>
            <nav style={{marginTop: "5px"}}>
                <Link to="/" style={linkStyle}>Hem</Link>
                <Link to="/categories" style={linkStyle}>Lista kategorier</Link>
                <Link to="/postcategory" style={linkStyle}>Skapa ny kategori</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                  <h1>Home</h1>
                </Route>
                <Route exact path="/categories" component={GetCategories}/>
                <Route exact path="/postcategory" component={PostCategory}/>
                <Route exact path="/category/:categoryId/thread" component={GetThreads}/>
                <Route exact path="/" />
                {/* <Redirect to="/thread/:threadId/newcomment" component={PostComment}/> */}
            </Switch>
        </Router>
    </div>
    )
}
    
export default App;
