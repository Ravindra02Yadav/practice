import * as types from './actionTypes'

const initialState = {
    todos:[]
    
}

const reducer = (state= initialState, action)=>{
    const {type,payload} = action
    switch(type){
        case types.GET_TODOS_REQUEST:
            return {...state}
        case types.GET_TODOS_SUCCESSFUL:
            return {...state,
            todos:payload
            }
        case types.GET_TODOS_FAILURE:
            return {
            ...state,
            todos:[],
            
        } 
        default: return state;   
    }
//    return state;
}
export {reducer};