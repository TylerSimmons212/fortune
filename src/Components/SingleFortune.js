import React, { Component } from 'react';

class SingleFortune extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    
    
    render(){

        console.log(this.props.fortune)
        return(
            <div>
                {this.props.fortune}
                <button onClick={this.props.addFavorite}>Add</button>
            </div>
        )
    }
}

export default SingleFortune