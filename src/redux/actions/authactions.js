import {fetchLogin} from "../request"
import addExpert from "../request"
import axios from 'axios'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
 

export const login =(user)=> {
    console.log(user)
    return async(dispatch) =>{
    try{
        
       
     const res =  await axios.post(`http://localhost:4000/app/user/signin`,{...user})
            if (res.status === 200){
              
                const {token,user} = res.data
                console.log(token)
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(user))
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:{
                        token,user
                    }
                   
                })
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_FAILED",
                        payload:{error:res.data.error}
                    })
                }
    
            }
          
            console.log("payload")
       
       
    }
    catch (error) {
              console.log(error);
             }
}}

export const isUserLoggedIn = () =>{
    return async dispatch =>{
        const token = localStorage.getItem('token')
        if(token){
            const user = JSON.parse(localStorage.getItem('user'))
          dispatch({
                type:'LOGIN_SUCCESS',
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({type:'LOGIN_FAILED',
                payload:{
                    
                    error:'Failed to login'
                }
            })
        }
    }

}

export const signout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT_REQUEST'
        })
    }
};
   // signup user

   export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({type: "USER_REGISTER_REQUEST"});
        const res = await axios.post(`http://localhost:4000/app/user/register`, {
            ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: "USER_REGISTER_SUCCESS",
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: "USER_REGISTER_FAILURE",
                    payload: { error: res.data.error }
                });
            }
        }
    }
}



