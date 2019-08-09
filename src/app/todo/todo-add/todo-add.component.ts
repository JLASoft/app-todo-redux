import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { AgregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit
{
    public txtInput: FormControl;

    constructor(private store: Store<AppState>)
    {
        this.store.select('todo').subscribe
        (
            todo =>
            {
                console.table(todo);
            }
        );
    }

    ngOnInit()
    {
        this.txtInput = new FormControl('', Validators.required);
    }

    public AgregarTodo()
    {
        if (this.txtInput.invalid)
            return;

        // console.log(this.txtInput.value);
        // console.log(this.txtInput.valid);
        this.store.dispatch(new AgregarTodoAction(this.txtInput.value));

        this.txtInput.setValue('');
    }

}
