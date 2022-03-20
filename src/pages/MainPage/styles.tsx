import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  padding: 6px 5%;
`;

export const HeaderLogo = styled.img`
  height: 50px;
  width: 80px;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 0;
  margin: 0;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  height: 50px;
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  color: yellow;
  width: 30%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: brown;
`;

export const JokesWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  color: yellow;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 6px 2%;
`;

export const JokesDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const JokeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  height: 50px;
  color: brown;
  width: 50px;
  background-color: transparent;
  border: none;
`;

export const AddWrapper = styled.div`
  height: 50vh;
  width: 100%;
  max-width: 640px;
  border-radius: 12px;
  padding: 15px;
  background: orange;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;
