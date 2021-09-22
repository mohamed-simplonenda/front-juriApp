import axios from 'axios'


// get Expert
export const getExpert=()=> async (dispatch)=> {
    try{
    const res = await axios.get('http://localhost:4000/app/expert/getExpert')
    dispatch({
        type:"GET_EXPERTS_SUCCEDED",
        payload:res.data 

    })
    console.log('getExpert',res.data)
    }
    catch (error) 
    {
    console.log(error);
    }
    }

    // get  expert by id

export const getExpertById=(id)=> async (dispatch)=> {
    try{
    const res = await axios.get(`http://localhost:4000/app/expert/getExpertById/${id}`)
    dispatch({
        type:"GET_EXPERTBYID_SUCCEDED",
        payload:res.data 
  
    })
    console.log('getExpertById',res.data)
    }
    catch (error) {
                  console.log(error);
                 }
    }