import axios from 'axios'
import {addContact,deleteContact} from '../request'



// get all contact

export const getContact=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/app/contact/getContact')
    dispatch({
        type:"GET_CONTACT_SUCCEDED",
        payload:res.data 

    })
    console.log('getContact',res.data)
    }
    catch (error) {
                  console.log(error);
                 }
    }




    // post contact

    export const addNewContact =(nom,email,message)=> async (dispatch) =>{
        try{
            const res=await addContact (nom,email,message);
            dispatch ({
                type:"POST_CONTACT_SUCCEDED",
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }

    
// delete contact
export const deleteContacts = (id)=> async (dispatch) => {
    try {
      await deleteContact (id);
      dispatch({
        type:"DELETE_CONTACT_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getContact);
    } catch (error) {
      console.log(error);
    }
  };
    