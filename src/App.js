import './App.css';

import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'  
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state={
    progress: 0
  }
  apikey=process.env.REACT_APP_NEWS_API;
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar>
        </Navbar>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Switch>
          <Route exact path="/" ><News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={8} country="in"></News></Route>
          <Route exact path="/entertainment"><News apikey={this.apikey}  setProgress={this.setProgress} key="entertainment" pageSize={8} country="in" category="entertainment"></News></Route>
          <Route exact path="/business" ><News apikey={this.apikey}  setProgress={this.setProgress} key="business" pageSize={8} country="in" category="business"></News></Route>
          <Route exact path="/sports" ><News apikey={this.apikey}  setProgress={this.setProgress} key="sports" pageSize={8} country="in" category="sports"></News></Route>
          <Route exact path="/science" ><News apikey={this.apikey}  setProgress={this.setProgress} key="science" pageSize={8} country="in" category="science"></News></Route>
          <Route exact path="/health" ><News apikey={this.apikey}  setProgress={this.setProgress} key="health" pageSize={8} country="in" category="health"></News></Route>
          <Route exact path="/technology" ><News apikey={this.apikey}  setProgress={this.setProgress} key="technology" pageSize={8} country="in" category="technology"></News></Route>
          <Route exact path="/general" ><News apikey={this.apikey}  setProgress={this.setProgress} key="general1" pageSize={8} country="in" category="general"></News></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

