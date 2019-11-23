import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #f3f3f3;
  width: 300px;
  height: 300px;
`;

const PersonCard = props => {
  // console.log(props.name);

  return (
    <CardContainer>
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Birth Year: {props.birthyear}</p>
    </CardContainer>
  );
};

export default PersonCard;
