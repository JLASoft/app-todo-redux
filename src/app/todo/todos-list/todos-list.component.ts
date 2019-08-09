import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../Models/todo';
import { filtrosValidos } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit
{
    public todos: Array<Todo> = new Array<Todo>();
    public filtro: filtrosValidos;

    public constructor(private store: Store<AppState>)
    {

    }

    public ngOnInit()
    {
        this.store.subscribe
        (
            state =>
            {
                this.todos = state.todos;
                this.filtro = state.filtro;

                console.log('todos', state.todos);
            }
        );
    }
}
