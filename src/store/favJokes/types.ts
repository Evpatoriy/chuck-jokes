import { Joke } from "../../api";

export interface FavJokesStore {
  favJokes: Joke[];
}

export interface FavJokesEvent {
  "favJokes/add": Joke;
  "favJokes/delete": Joke;
}
