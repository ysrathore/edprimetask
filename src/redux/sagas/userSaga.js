import {call,put,takeEvery} from 'redux-saga/effects';
const apiURL=`https://jsonplaceholder.typicode.com/users`;

function getApi(){
    return fetch(apiURL,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    .then(response=>response.json())
    .catch(error=>console.error(error)
    )
}

function* fetchUsers(action){
    console.log("inside fetch user handler");

  try{
    const users=yield call(getApi);
    yield put({type:'GET_USERS_SUCCESS',users:users})
  }
  catch(e){
    yield put({type:'GET_USERS_FAILURE',message:e.message})

  }
}

function* userSagaHandler(){
    console.log("inside usersaga handler");
    
    yield takeEvery('GET_USERS_REQUESTED',fetchUsers);


}

export default userSagaHandler;