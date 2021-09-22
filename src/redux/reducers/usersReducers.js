const initialState={
    dataUsers : [],
    loading:true
  } 
  
   export const usersReducer = ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type){
      case "GET_USERS_SUCCEDED":
        
        return {
          ...state,
          dataUsers: payload,
          loading: false
        };
        case "GET_USERBYID_SUCCEDED":
        
          return {
            ...state,
            dataUsers: payload,
            loading: false
          };
  

         case "DELETE_USERS_SUCCEDED":
              return {
          ...state,
          dataUsers: state.dataUsers.filter(
            data => data._id !== payload
                  ),
              };
        
    
  
    }
    return state
  };