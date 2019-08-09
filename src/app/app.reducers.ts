import { Todo } from './todo/Models/todo';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroreducer } from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';

export interface AppState
{
    todos: Array<Todo>;
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> =
{
    todos: todoReducer,
    filtro: filtroreducer
}