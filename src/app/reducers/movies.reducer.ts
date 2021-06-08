import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface MovieEntity {
  id: string;
  title: string;
  director: string;
  yearReleased?: number
}

export interface MoviesState extends EntityState<MovieEntity> {

}

export const adapter = createEntityAdapter<MovieEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: MoviesState = initialState, action: Action): MoviesState {
  return reducerFunction(state, action);
}



