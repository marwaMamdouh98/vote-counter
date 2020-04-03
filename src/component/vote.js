import React , {Component} from 'react';


class Vote extends Component{
    
    state =
        {count: this.props.voteItems.vote};
    
        change = () =>{
            this.setState({
                count: this.state.count + 1 
            })
        }
    
    
    render(){
        
        const items = this.props.voteItems;
        const theItem = items.map( (item) => {
            return(
            <div className="showVote">
                <div className="voteCount">
                    <h1 >{item.vote}</h1>
                </div>
                <div className="voteName">
                    <h2 >{item.name}</h2>
                </div>
                <button onClick={this.change} className="voteBtn">click here</button>
            </div>
            )
        })
        return(
            <div>
               {theItem}
            </div>
        )
    }
}

    
  export default Vote;