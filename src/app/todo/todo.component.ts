import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToogleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit
{
    public completado: boolean = false;

    public constructor(private store: Store<AppState>)
    {
      
    }

    ngOnInit() {
    }

    public ToogleAll() : void
    {
        this.completado = !this.completado;

        this.store.dispatch(new ToogleAllTodoAction(this.completado));
    }
}
