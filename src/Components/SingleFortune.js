import React from 'react';

function SingleFortune(props){
        console.log(props.fortune)
        return(
            <div>
                {props.fortune}
                <button onClick={props.addFavorite}>Add</button>
            </div>
        )
    }

export default SingleFortune