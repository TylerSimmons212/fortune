import React, {Component} from 'react';

class List extends Component{
    constructor(){
        super()
        this.state = {
            favoriteFortune:null,
            toggleEdit: false
        }
    }
    submit(id){
        this.toggleEdit()
        this.props.edit(id,this.props.userInput)
    }

    prepUpdateFortune(value){
        this.props.update(value)
    }
    toggleEdit(){
        this.setState({toggleEdit:!this.state.toggleEdit})
    }
    render(props){
    let id = this.props.id;

    // console.log(this.props.favoriteFortune)
    return (
     <div>
         <p>{this.props.favoriteFortune}</p>

        {this.state.toggleEdit ? 
            <div>
                <input value={this.props.userInput}
         onChange={(e)=>this.prepUpdateFortune(e.target.value)}/>
                <button onClick={() => this.submit(this.props.id)}>Submit</button>
            </div>
            :
            <button onClick={() => this.toggleEdit()}>Edit</button>
        }
         
         {/* <input style={{display: this.state.toggleEdit ? 'inline-block' : 'none'}}
         value={this.props.userInput}
         onChange={(e)=>this.prepUpdateFortune(e.target.value)}
         ></input> */}
         <button onClick={()=>this.props.delete(id)}>Delete</button>
    </div>
    )
}}

export default List