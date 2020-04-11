import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Vote from './component/vote';
import "./component/vote.css"
class App extends Component{
// create state for save data ..
  state = {
    voteItems:[
      {id:1, name:"PHP", votes : 1},
      {id:2, name:"Python" ,votes : 0},
      {id:3, name:"Go" ,votes : 0},
      {id:4, name:"Java" ,votes : 0}
    ]
  };

 
  render(){
    return (
      <div className="app">
        {this.state.voteItems.map((items) => 
          <Vote key={items.id} votes={items.votes} name={items.name}/>
        )}
     
      </div>
    );
  }
}
  
//<Vote voteItems={this.state.voteItems}/>

export default App;
