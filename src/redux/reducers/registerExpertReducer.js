const initState = {
    error: null,
    message: '',
    loading: false
}
export const ExpertRegisterReducer = (state = initState, action) => {
    switch(action.type){
        case "EXPERT_REGISTER_REQUEST":
            state = {
                ...state,
                loading: true
            }
            break;
        case "EXPERT_REGISTER_SUCCESS":
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case "EXPERT_REGISTER_FAILURE":
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}