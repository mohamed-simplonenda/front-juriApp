import React from 'react'
import {InputGroup,FormControl,DropdownButton,Dropdown} from 'react-bootstrap'

export default function RechercheExpert({getInput,input}) {
    return (
        <div className="d-flex justify-content-center mb-5">

        {/* <InputGroup className="input-group mb-3"> */}
            <FormControl aria-label="Text input with dropdown button"
             type="text" placeholder="SEARCH" className="inputRecherche" onChange={getInput}  
            />


                          <select  className="selectRecherche" onChange={getInput} >
                            <option  selected>Recherche</option>
                            <option >Avocat</option>
                            <option >Huissier notaire</option>
                            <option >Huissier de justice</option>
                            {console.log(`getInput`, input)}
                          </select>

            {/* <DropdownButton
            variant="primary"
            title="Recherche"
            id="input-group-dropdown-2"
            align="end"
           
            >
            <Dropdown.Item href="#">Avocat</Dropdown.Item>
            <Dropdown.Item href="#">Juriste</Dropdown.Item>
            <Dropdown.Item href="#"> notice</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Maitre exucuteur</Dropdown.Item>
            </DropdownButton>
        </InputGroup> */}

            
        </div>
    )
}
