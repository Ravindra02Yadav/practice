import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Redux/action'

const Todo = () => {
   const todos = useSelector(state=>state.todos)
   const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getTodo())
  },[])
  console.log("hi", todos)

  return (
    <div>
todo
    </div>
  )
}

export default Todo