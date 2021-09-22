import axios from 'axios'

export const signupExpert = (expert) => {

    console.log(expert)

    return async (dispatch) => {

        dispatch({type: "EXPERT_REGISTER_REQUEST"});
        const res = await axios.post(`http://localhost:4000/app/expert/register`, {
            ...expert
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: "EXPERT_REGISTER_SUCCESS",
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: "EXPERT_REGISTER_FAILURE",
                    payload: { error: res.data.error }
                });
            }
        }
    }
}