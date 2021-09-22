import axios from 'axios'
import {addRdvs,deleteRdv} from '../request'



// get all rendez-vous

export const getRdv=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/app/rendez-vous/getRdv')
    dispatch({
        type:"GET_RDV_SUCCEDED",
        payload:res.data 

    })
    console.log('getRdv',res.data)
    }
    catch (error) {
                  console.log(error);
                 }
    }


// get  rendez-vous by id

export const getRdvById=(id)=> async (dispatch)=> {
  try{
  const res = await axios.get(`http://localhost:4000/app/rendez-vous/getRdvById/${id}`)
  dispatch({
      type:"GET_RDVID_SUCCEDED",
      payload:res.data 

  })
  console.log('getRdvById',res.data)
  }
  catch (error) {
                console.log(error);
               }
  }


    // post rendez-vous 

    export const addNewRdv=(date,heure,idExpert,NomExpert,idUser,NomUser,status )=> async (dispatch) =>{
        try{
            const res=await addRdvs (date,heure,idExpert,NomExpert,idUser,NomUser,status);
            dispatch ({
                type:"POST_RDV_SUCCEDED",
                payload:res.data
            })
            console.log("payload")
        }
        catch (error) {
                  console.log(error);
                 }
    }

    

export const deleteRDV = (id)=> async (dispatch) => {
    try {
      await deleteRdv (id);
      dispatch({
        type:"DELETE_RDV_SUCCEDED",
        payload:id
    })
      console.log("delete")
      dispatch(getRdv);
    } catch (error) {
      console.log(error);
    }
  };
    // update rendez-vous 
export const updateItem = (id,date,heure,idExpert,NomExpert,idUser,NomUser,status ) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:4000/app/rendez-vous/updateRdv/${id}`
    ,{date,heure,idExpert,NomExpert,idUser,NomUser,status }).then(res=>  window.location.reload()) 
     
    dispatch({
      type:  "UPDATE_RDV_SUCCEDED", 
      payload: res.data
    });
    console.log("superrr")
  } catch (error) {
    console.log(error);
  }
};