import React, { Component } from 'react';
import Loginscreen from './Loginscreen'
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }
  
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}const style = {
  margin: 15,
};export default App;