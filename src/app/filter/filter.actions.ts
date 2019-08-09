import { Action } from '@ngrx/store';

export const SET_FILTRO = "[Filter] SET FILTRO";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action
{
    readonly type = SET_FILTRO;

    public constructor(public filtro: filtrosValidos) { }
}

export type Accion = SetFiltroAction;