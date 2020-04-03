import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Vote from './component/vote';
import "./component/vote.css"
class App extends Component{
// create state for save data ..
  state = {
    voteItems:[
      {id:1, name:"PHP", vote : 1},
      {id:2, name:"Python" ,vote : 0},
      {id:3, name:"Go" ,vote : 0},
      {id:4, name:"Java" ,vote : 0}
    ]
  };

 change = () => {this.setState({ vote: this.state.voteItems[0] + 1 })}
 
  render(){
    return (
      <div className="app">
      <Vote voteItems={this.state.voteItems}/>
      <button onClick={this.change} className="voteBtn">click here</button>
      </div>
    );
  }
}
  


export default App;
