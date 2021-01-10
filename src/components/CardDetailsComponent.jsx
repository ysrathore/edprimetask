import React from 'react'

function CardDetailsComponent(props) {
    return (
        <div className='card_row'>
           <h5>Name:{props.users.name}</h5> 
            <h6>{props.users.username}</h6>
           <h6>{props.users.email}</h6>
           <h6>{props.users.phone}</h6>
           <h6>{props.users.website}</h6>
           <p>Company Name:{props.users.company.name}</p> 
        </div>
    )
}

export default CardDetailsComponent
