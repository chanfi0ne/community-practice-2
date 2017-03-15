import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameTag from './NameTag.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      person: { name: "Sevatec" }
    }

    console.log('ctor', this.state);
  }

  renderLoadingScreen(){
      return (<div>Loading...</div>);
  }

  renderName(){
      return (<NameTag person={this.state.person}></NameTag>);
  }

  componentDidMount(){   
    this.setState({
      isLoading: false
    });

    //do stuff here - like hit an API
    
    console.log('componentDidMount', this.state);
  }
   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      
        </div>
        <div className="App-intro">
            {this.state.isLoading ? this.renderLoadingScreen() : this.renderName()}
        </div>
      </div>
    );
  }
}

export default App;
