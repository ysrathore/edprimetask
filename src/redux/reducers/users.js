import { GET_USERS_REQUESTED, GET_USERS_SUCCESS, GET_USERS_FAILURE} from '../types'
const initialState={
    users:[],
    loading:false,
    error:null
}

export default function userReducer(state=initialState,action){
    switch (action.type) {
        case GET_USERS_REQUESTED:
        return{

            ...state,
            loading:true
        }    
        case GET_USERS_SUCCESS:
        return{

            ...state,
            loading:false,
            users:action.users
        }    
        case GET_USERS_FAILURE:
        return{

            ...state,
            loading:true,
            error:action.message
        }    

    
        default:
            return state;
    }
}