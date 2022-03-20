import { createStoreon } from 'storeon';
import { favJokes } from './favJokes';
import { persistState } from "@storeon/localstorage";

export const store = createStoreon([favJokes, persistState(["favJokes"])]);