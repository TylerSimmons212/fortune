import React, {Component} from 'react';

class List extends Component{
    constructor(){
        super()
        this.state = {
            favoriteFortune:null,
            toggleEdit: false
        }
    }
    prepUpdateFortune(value){
        this.props.update(this.props.i,value)
    }
    render(props){
    let id = this.props.id;
    let editText = () => {
        console.log("clicked")
        return (<input></input>)
    }
    return (
     <div>
         <p>{this.props.favoriteFortune}</p>
         <button onClick={()=>{
            editText();
            this.setState({toggleEdit:!this.state.toggleEdit})
            
        }}>Edit</button>
         <input style={{display: this.state.toggleEdit ? 'inline-block' : 'none'}}
         value={this.props.favoriteFortune}
         onChange={(e)=>this.prepUpdateFortune(e.target.value)}
         ></input>
         <button onClick={()=>this.props.delete(id)}>Delete</button>
    </div>
    )
}}

export default List