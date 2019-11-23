import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import styled from "styled-components";

const Person = () => {
  const [personName, setPersonName] = useState([]);

  useEffect(updatePerson => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res.data.results);
        setPersonName(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="person-container">
      {personName.map(personData => {
        return (
          <PersonCard
            name={personData.name}
            height={personData.height}
            mass={personData.mass}
            birthyear={personData.birth_year}
            key={personData.key}
          />
        );
      })}
    </div>
  );
};

export default Person;
