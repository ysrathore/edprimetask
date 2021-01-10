import { GET_USERS_REQUESTED} from '../types'

export function getUsers(users){
    return{
        type:GET_USERS_REQUESTED,
        payload:users
    }
}