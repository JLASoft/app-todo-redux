import { filtrosValidos, Accion, SET_FILTRO } from "./filter.actions";

const estadoInicial: filtrosValidos = 'todos';

export function filtroreducer(state = estadoInicial, action: Accion) : filtrosValidos
{
    switch(action.type)
    {
        case SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}