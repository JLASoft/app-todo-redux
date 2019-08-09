import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] AGREGAR TODO';
export const TOOGLE_TODO = '[Todo] TOOGLE TODO';
export const EDITAR_TODO = '[Todo] EDITAR TODO';
export const BORAR_TODO = '[Todo] BORAR TODO';
export const BORAR_ALL_TODO = '[Todo] BORAR ALL TODO';
export const TOOGLE_ALL_TODO = '[Todo] TOOGLE ALL TODO';

export class AgregarTodoAction implements Action
{
    readonly type = AGREGAR_TODO;

    public constructor(public texto: string) { }
}

export class ToogleTodoAction implements Action
{
    readonly type = TOOGLE_TODO;

    public constructor(public id: number) { }
}

export class EditarTodoAction implements Action
{
    readonly type = EDITAR_TODO;

    public constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action
{
    readonly type = BORAR_TODO;

    public constructor(public id: number) { }
}

export class BorrarAllTodoAction implements Action
{
    readonly type = BORAR_ALL_TODO;
}

export class ToogleAllTodoAction implements Action
{
    readonly type = TOOGLE_ALL_TODO;

    public constructor(public completado: boolean) { }
}

export type Acciones = AgregarTodoAction | ToogleTodoAction | EditarTodoAction | BorrarTodoAction | BorrarAllTodoAction | ToogleAllTodoAction;