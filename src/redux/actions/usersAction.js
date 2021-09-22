import axios from 'axios'
import {deleteUser} from '../request'


// get User
export const getUser=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/app/user/getUser')
    dispatch({
        type:"GET_USERS_SUCCEDED",
        payload:res.data 

    })
    console.log('getUser',res.data)
    }
    catch (error) 
    {
    console.log(error);
    }
    }
    // get  user by id

    export const getUserById=(id)=> async (dispatch)=> {
      try{
      const res = await axios.get(`http://localhost:4000/app/user/getUserById/${id}`)
      dispatch({
          type:"GET_USERBYID_SUCCEDED",
          payload:res.data 
    
      })
      console.log('getUserById',res.data)
      }
      catch (error) {
                    console.log(error);
                   }
      }
    
    

export const deleteUsers = (id)=> async (dispatch) => {
    try {
      await deleteUser (id);
      dispatch({
        type:"DELETE_USER_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getUser);
    } catch (error) {
      console.log(error);
    }
  };



    // update User
    export const updateItemUser = (id,fullName,phone,email,password,description,specialité,status ) => async dispatch => {
      try {
        const res = await axios.put(`http://localhost:4000/app/user/${id}/updateUser`,{fullName,phone,email,password,description,specialité,status}).then(res=>  window.location.reload()) 
         
        dispatch({
          type:  "UPDATE_USER_SUCCEDED", 
          payload: res.data
        });
        console.log("superrr")
      } catch (error) {
        console.log(error);
      }
    };