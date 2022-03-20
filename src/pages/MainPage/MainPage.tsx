import React, { FC, useState, useMemo } from "react";
import { useStoreon } from "storeon/react";
import { getJoke, Joke } from "../../api";
import {
  HeaderWrapper,
  Button,
  JokesWrapper,
  ButtonsWrapper,
  AddButton,
  AddWrapper,
  Img,
  Wrapper,
  HeaderLogo,
  JokeButtonWrapper,
  JokesDiv,
} from "./styles";
import Noris from "../../Image/pngwing.com (1).png";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavJokesEvent, FavJokesStore } from "../../store/favJokes";
import { useParams, useNavigate } from "react-router-dom";
import RepeatIcon from "@mui/icons-material/Repeat";
import Timer3SelectIcon from "@mui/icons-material/Timer3Select";
import BlockIcon from "@mui/icons-material/Block";

export const MainPage: FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [timeInterval, setTimeInterval] = useState<undefined | number>(0);

  let navigate = useNavigate();

  const fetchJoke = async () => {
    setJoke(await getJoke());
  };

  const getJokeRepeat = () => {
    setTimeInterval(setInterval(fetchJoke, 3000));
  };

  const deleteJokeRepeat = () => {
    clearInterval(timeInterval);
    setTimeInterval(undefined);
  };

  const { favJokes, dispatch } = useStoreon<FavJokesStore, FavJokesEvent>(
    "favJokes"
  );

  const favJoke = useMemo(() => {
    return joke ? favJokes.find((j) => j.id === joke.id) : null;
  }, [joke, favJokes]);

  return (
    <Wrapper>
      <Img src={Noris}></Img>
      <AddWrapper>
        <JokesWrapper>
          <JokeButtonWrapper>
            <AddButton
              onClick={() => {
                navigate("/FavJokes");
              }}
            >
              <StarIcon sx={{ width: "100%", height: "100%" }} />
            </AddButton>
            <AddButton
              onClick={() => {
                if (favJoke) {
                  dispatch("favJokes/delete", favJoke);
                  return;
                }
                if (joke) dispatch("favJokes/add", joke);
              }}
            >
              <FavoriteIcon
                sx={{
                  width: "100%",
                  height: "100%",
                  color: favJoke ? "brown" : "lightgray",
                }}
              />
            </AddButton>
          </JokeButtonWrapper>
          <JokesDiv>{joke ? joke.value : 'Hello, my fellow friend'}</JokesDiv>
        </JokesWrapper>
      </AddWrapper>
      <ButtonsWrapper>
        <Button onClick={fetchJoke}>Get Joke</Button>
        <Button onClick={timeInterval ? deleteJokeRepeat : getJokeRepeat}>
          {timeInterval ? (
            <BlockIcon sx={{ height: "100%" }} />
          ) : (
            <>
              <RepeatIcon sx={{ height: "100%" }} />
              <Timer3SelectIcon sx={{ height: "100%" }} />
            </>
          )}
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
