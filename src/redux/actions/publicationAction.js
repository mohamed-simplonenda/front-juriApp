import axios from 'axios'
import {addPub,deleteItems} from '../request'




export const getPub=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/app/publication/getPublication')
    dispatch({
        type:"GET_PUB_SUCCEDED",
        payload:res.data 

    })
    console.log('sara',res.data)
    }
    catch (error) {
                  console.log(error);
                 }
    }


    // post publication

    export const addNewPubs=(image,date,titre,texte,auteur )=> async (dispatch) =>{
        try{
            const res=await addPub (image,date,titre,texte,auteur);
            dispatch ({
                type:"POST_PUB_SUCCEDED",
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }

    

export const deleteProduct = (id)=> async (dispatch) => {
    try {
      await deleteItems (id);
      dispatch({
        type:"DELETE_PUB_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getPub);
    } catch (error) {
      console.log(error);
    }
  };
    // update Publication
export const updateItem = (id,image,date,titre,texte,auteur ) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:4000/app/publication/${id}/updatePublication`,{image,date,titre,texte,auteur}).then(res=>  window.location.reload()) 
     
    dispatch({
      type:  "UPDATE_PUB_SUCCEDED", 
      payload: res.data
    });
    console.log("superrr")
  } catch (error) {
    console.log(error);
  }
};