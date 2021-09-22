const initialState={
    dataExperts : [],
    loading:true
  } 
  
   export const expertsReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_EXPERTS_SUCCEDED":
        
        return {
          ...state,
          dataExperts: payload,
          loading: false
        };
        case "GET_EXPERTBYID_SUCCEDED":
        
          return {
            ...state,
            datas: payload,
            loading: false
          };
  
    
        
    
  
    }
    return state
  };