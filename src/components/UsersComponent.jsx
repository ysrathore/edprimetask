import React, { useEffect } from 'react'
import CardComponent from './CardComponent';
import {useSelector,useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/usersActions'

function UsersComponent() {
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users.users);
    const loading=useSelector(state=>state.users.loading);
    const error=useSelector(state=>state.users.error);
    console.log("users data",users);
    
    
    useEffect(() => {
       dispatch(getUsers())
    },[])
    return (
        <div className='user_component_row'>
              <h1>Hi Redux Saga Task App!!</h1>

        {loading && <span>Loading...</span>}
        {users.length>0 && users.map(user=>(
                    <CardComponent key={user.id} users={user}/>

    ))}

        {users.length===0 && !loading && <h3>No User Available</h3>}
        {error && !loading && <span>{error}</span>}
        </div>
    )
}

export default UsersComponent
