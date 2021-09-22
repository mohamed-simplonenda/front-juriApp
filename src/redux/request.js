import axios from "axios"


const Api = axios.create({ baseURL: "http://localhost:4000/app/publication" });
const API = axios.create({ baseURL: "http://localhost:4000/app/expert" });
const ApiRdv = axios.create({ baseURL: "http://localhost:4000/app/rendez-vous" });
const ApiContact = axios.create({ baseURL: "http://localhost:4000/app/contact" });

//add publication
function addPub(image,date,titre,texte,auteur,imageExpert,description ) {
    return Api.post("/addPublication", {image,date,titre,texte,auteur,imageExpert,description});
  }
  export  {addPub}
  export default {addPub}


  // delete publication
export const deleteItems=(id)=> {
  axios.delete(`http://localhost:4000/app/publication/${id}/deletePublication` ).then(res=>res.data) ;
}


//add contact
function addContact(nom,email,message ) {
  return ApiContact.post("/addContact", {nom,email,message});
}
export  {addContact}



// delete contact
export const deleteContact=(id)=> {
axios.delete(`http://localhost:4000/app/contact/deleteContact/${id}` ).then(res=>res.data) ;
}





//add rendez-vous
function addRdvs(date,heure,idExpert,NomExpert,idUser,NomUser,status ) {
  return ApiRdv.post("/addRdv", {date,heure,idExpert,NomExpert,idUser,NomUser,status});
}
export  {addRdvs}


  // delete rendez-vous


  export const deleteRdv=(id)=> {
    axios.delete(`http://localhost:4000/app/rendez-vous/deleteRdv/${id}` ).then(res=>res.data) ;
  }
    
  
// fetch login
export const fetchLogin = (user) =>
  axios.post(`http://localhost:4000/app/user/signin`,{...user})

    //add expert
function addExpert(fullName,image,phone,specialité,email,password ) {
  return API.post("/register", {fullName,image,phone,specialité,email,password});
}
export  {addExpert}


  // delete user


  export const deleteUser=(id)=> {
    axios.delete(`http://localhost:4000/app/user/${id}/deleteUser` ).then(res=>res.data).then(res=>  window.location.reload())  ;
  }
