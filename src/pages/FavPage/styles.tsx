import React from "react";
import styled from "styled-components";

export const FavJokeForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  background-color: #f4f4f4;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const FavJokesWrapper = styled.div`
  height: 500px;
  width: 100%;
  background-color: black;
  color: orange;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow-y: auto; 
  
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Li = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  background-color: brown;
  color: yellow;
  align-self: start;
`;

export const DeleteButton = styled.button`
  background: inherit;
  border: none;
`;
