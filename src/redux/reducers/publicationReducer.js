const initialState={
    datas : [],
    loading:true
  } 
  
   export const pubReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_PUB_SUCCEDED":
        
        return {
          ...state,
          datas: payload,
          loading: false
        };
        case "GET_PUBID_SUCCEDED":
        
          return {
            ...state,
            datas: payload,
            loading: false
          };
  
        case "POST_PUB_SUCCEDED":
         return {
          ...state,
          datas: [...state.datas, payload]
    
         };
         case "DELETE_PUB_SUCCEDED":
              return {
          ...state,
          datas: state.datas.filter(
            data => data._id !== payload
                  ),
              };
        
    
  
    }
    return state
  };