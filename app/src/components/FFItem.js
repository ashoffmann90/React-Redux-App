import React from 'react'


export const FFItem = (props) => {
    console.log(props.name)
    return(
        <div>
            <h3>{props.name}</h3>
            {/* <img src=`https://xivapi.com/${props.}`></img> */}
        </div>
    )
}
