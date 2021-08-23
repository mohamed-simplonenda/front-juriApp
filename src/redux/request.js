import axios from "axios"


const Api = axios.create({ baseURL: "http://localhost:4000/app/publication" });

//add publication
function addPub(image,date,titre,texte,auteur ) {
    return Api.post("/addPublication", {image,date,titre,texte,auteur});
  }
  export  {addPub}
  export default {addPub}



  // delete publication


export const deleteItems=(id)=> {
  axios.delete(`http://localhost:4000/app/publication/${id}/deletePublication` ).then(res=>res.data) ;
}
  
// fetch login
export const fetchLogin = (user) =>
  axios
    .post(`http://localhost:4000/user/signin`,{...user})