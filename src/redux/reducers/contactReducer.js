const initialState={
    dataContact : [],
    loading:true
  } 
  
   export const contactReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_CONTACT_SUCCEDED":
        
        return {
          ...state,
          dataContact: payload,
          loading: false
        };

  
        case "POST_CONTACT_SUCCEDED":
         return {
          ...state,
          dataContact: [...state.dataContact, payload]
    
         };
         case "DELETE_CONTACT_SUCCEDED":
              return {
          ...state,
          dataContact: state.dataContact.filter(
            data => data._id !== payload
                  ),
              };
        
    
  
    }
    return state
  };