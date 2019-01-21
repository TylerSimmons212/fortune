import React from 'react';

const List = (props) => {
    let id = props.id;

    return (
     <div>
         <p>{props.favoriteFortune}</p>
         <button >Edit</button>
         <button onClick={()=>props.delete(id)}>Delete</button>
    </div>
    )
}

export default List