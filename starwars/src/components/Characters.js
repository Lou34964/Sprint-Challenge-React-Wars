import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCards from "./CharacterCards";


const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    margin: 1%;
   
`;

function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response);
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error);
              });
    }, []);

    return (
        <StyledCard>
            {
            characters.map((data, index) => {
            return(
                <CharacterCards
                key={index}
                name={data.name}
                birthYear={data.birth_year}
                eyeColor={data.eye_color}
                hairColor={data.hair_color}
                height={data.height}
                mass={data.mass}
                />
            )
            })}
        </StyledCard>      
    );
}

export default Characters;