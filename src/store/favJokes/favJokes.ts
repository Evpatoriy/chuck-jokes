import { StoreonModule} from 'storeon';
import { FavJokesEvent, FavJokesStore } from "."

export const favJokes: StoreonModule<FavJokesStore, FavJokesEvent> = (store) => {
    store.on("@init", () => ({ favJokes: []}));
    store.on("favJokes/add", (store, joke) => {
        return {
            favJokes: [...store.favJokes, joke]
        };
    });
    store.on("favJokes/delete", (store, joke) => {
        return {
            favJokes: store.favJokes.filter(j => j.id !== joke.id)
        };
    })
}