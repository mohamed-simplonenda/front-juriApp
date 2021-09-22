const initialState={
    dataRdv : [],
    loading:true
  } 
  
   export const rdvReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_RDV_SUCCEDED":
        
        return {
          ...state,
          dataRdv: payload,
          loading: false
        };
        case "GET_RDVID_SUCCEDED":
        
          return {
            ...state,
            dataRdv: payload,
            loading: false
          };
  
        case "POST_RDV_SUCCEDED":
         return {
          ...state,
          dataRdv: [...state.dataRdv, payload]
    
         };
         case "DELETE_RDV_SUCCEDED":
              return {
          ...state,
          dataRdv: state.dataRdv.filter(
            data => data._id !== payload
                  ),
              };
        
    
  
    }
    return state
  };