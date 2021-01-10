import React from 'react'

function CardComponent(props) {
    return (
        <div className='card_row'>
           <h5>Name:{props.users.name}</h5> 
           <p>Company Name:{props.users.company.name}</p> 
        </div>
    )
}

export default CardComponent
