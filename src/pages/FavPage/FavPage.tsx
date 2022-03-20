import React, { FC } from "react";
import { useStoreon } from "storeon/react";
import { favJokes, FavJokesEvent, FavJokesStore } from "../../store/favJokes";
import { FavJokeForm, FavJokesWrapper, List, Li, Button, DeleteButton } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Joke } from "../../api";
import IconButton from '@mui/material/IconButton';

export const FavPage: FC = () => {
  const { favJokes, dispatch } = useStoreon<FavJokesStore, FavJokesEvent>("favJokes");
  let navigate = useNavigate();


  const deleteJoke = (joke: Joke) => {
    dispatch("favJokes/delete", joke);
  }

  return (
    <FavJokeForm>
      <Button onClick={() => navigate("/")}>
        <ArrowBackIcon></ArrowBackIcon>
      </Button>
      <FavJokesWrapper>
        <List>
          {favJokes.map((joke) => (
            <Li>
              {joke.value}
              <IconButton color="secondary" onClick={() => deleteJoke(joke)}>
                <DeleteIcon />
              </IconButton>
            </Li>
          ))}
        </List>
      </FavJokesWrapper>
    </FavJokeForm>
  );
};
