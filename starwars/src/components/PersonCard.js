import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: rgba(46, 85, 124, 0.5);
  width: 300px;
  height: 250px;
  padding-top: 60px;
  margin: 20px;
  border-radius: 10px;
  color: #f3f3f3;
  box-shadow: 15px 15px 23px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  &:hover {
    background: rgba(46, 85, 124, 1);
    box-shadow: 5px 5px 9px 0px rgba(0, 0, 0, 0.9);
  }
`;

const CardH2 = styled.h2`
  font-size: 1.7rem;
`;

const CardPara = styled.p`
  font-size: 1.3rem;
`;

const PersonCard = props => {
  // console.log(props.name);

  return (
    <CardContainer>
      <CardH2>{props.name}</CardH2>
      <CardPara>Birth Year: {props.birthyear}</CardPara>
      <CardPara>Height: {props.height}</CardPara>
      <CardPara>Mass: {props.mass}</CardPara>
    </CardContainer>
  );
};

export default PersonCard;
