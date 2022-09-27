import * as types from './actionTypes'
import axios from 'axios'


const getTodo =() => (dispatch)=>{
dispatch({type:types.GET_TODOS_REQUEST})
return axios.get("http://localhost:8080/todos")
.then(res=>{
  
    dispatch({type:types.GET_TODOS_SUCCESSFUL,payload:res.data})
})
.catch(err=>{

    dispatch({type:types.GET_TODOS_FAILURE,payload:err})
})
}
export {getTodo};