import { Joke } from ".";

export const getJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    let response = await fetch(url);
    let joke: Joke = await response.json();
    
    return joke;
};