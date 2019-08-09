import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../Models/todo';
import { BorrarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit
{
    public filtrosValidos: Array<filtrosValidos> = new Array<filtrosValidos>();
    public filtroActual: filtrosValidos;
    public pendientes: number;

    public constructor(private store: Store<AppState>)
    {
        this.filtrosValidos.push('todos');
        this.filtrosValidos.push('pendientes');
        this.filtrosValidos.push('completados');
    }

    public ngOnInit()
    {
        this.store.subscribe
        (
            state =>
            {
                this.ContarPendientes(state.todos);
                this.filtroActual = state.filtro;
            }
        );
    }

    public CambiarFiltro(nuevoFiltro: filtrosValidos)
    {
        this.store.dispatch(new SetFiltroAction(nuevoFiltro));
    }

    public ContarPendientes(todos: Array<Todo>)
    {
        this.pendientes = todos.filter(todo => !todo.completado).length;
    }

    public BorrarCompletados()
    {
        this.store.dispatch(new BorrarAllTodoAction());
    }
}
