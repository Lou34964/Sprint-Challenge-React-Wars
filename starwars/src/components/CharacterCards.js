import React from "react";
import styled from "styled-components";

const Card = styled.div`
    padding: 50px;
`;

const CardBody = styled.div`
    background: moccasin;
    padding: 20px;
    border-radius: 10px
`;

const CardTitle = styled.h1`
    font-size: 25px;
`;

const CardSubtitle = styled.h3`
    font-size: 15px;
`;

const CharacterCards = props => {
    return (
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>Birth Year: {props.birthYear}</CardSubtitle>
            <CardSubtitle>Eye Color: {props.eyeColor}</CardSubtitle>
            <CardSubtitle>Hair Color: {props.hairColor}</CardSubtitle>
            <CardSubtitle>Height: {props.height}</CardSubtitle>
            <CardSubtitle>Mass: {props.mass}</CardSubtitle>
          </CardBody>
        </Card>
    );
  };

export default CharacterCards;