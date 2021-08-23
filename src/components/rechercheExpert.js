import React from 'react'
import {InputGroup,FormControl,DropdownButton,Dropdown} from 'react-bootstrap'

export default function RechercheExpert() {
    return (
        <div className="d-flex justify-content-center">

        <InputGroup className="input-group mb-3">
            <FormControl aria-label="Text input with dropdown button" />

            <DropdownButton
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
        </InputGroup>

            
        </div>
    )
}
