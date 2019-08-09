import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../Models/todo';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToogleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit
{
    @Input() todo: Todo;
    @ViewChild('txtInputFisico', null) txtInputFisico: ElementRef;

    public chkField: FormControl;
    public txtInput: FormControl;

    public editando: boolean;

    constructor(private store: Store<AppState>)
    {

    }

    public ngOnInit()
    {
        this.chkField = new FormControl(this.todo.completado);
        this.txtInput = new FormControl(this.todo.texto, Validators.required);

        this.chkField.valueChanges.subscribe
        (
            value => this.store.dispatch(new ToogleTodoAction(this.todo.id))
        );
    }

    public Editar() : void
    {
        this.editando = true;

        setTimeout
        (
            () => { this.txtInputFisico.nativeElement.select(); }, 1
        );        
    }

    public TerminarEdicion() : void
    {
        this.editando = false;

        if (this.txtInput.invalid)
            return;

        if (this.txtInput.value === this.todo.texto)
            return;

        this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
    }

    public BorrarTodo()
    {
        this.store.dispatch(new BorrarTodoAction(this.todo.id));
    }
}
