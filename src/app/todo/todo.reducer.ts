import { Acciones, AGREGAR_TODO, TOOGLE_TODO, EDITAR_TODO, BORAR_TODO, TOOGLE_ALL_TODO, BORAR_ALL_TODO } from './todo.actions';
import { Todo } from './Models/todo';

const todo1 = new Todo('Aprender NGRX.');
const todo2 = new Todo('Publicar repositorio.');

const estadoInicial: Array<Todo> = new Array<Todo>();
estadoInicial.push(todo1);
estadoInicial.push(todo2);

export function todoReducer(state = estadoInicial, action: Acciones) : Array<Todo>
{
    switch(action.type)
    {
        case AGREGAR_TODO:
            return [...state, new Todo(action.texto)];
        case TOOGLE_TODO:
            return state.map
            (
                todoEdit => 
                {
                    if (todoEdit.id == action.id)
                        return { ...todoEdit, completado: !todoEdit.completado };
                    else
                        return todoEdit;
                }
            );
        case EDITAR_TODO:
                return state.map
                (
                    todoEdit => 
                    {
                        if (todoEdit.id == action.id)
                            return { ...todoEdit, texto: action.texto };
                        else
                            return todoEdit;
                    }
                );
        case BORAR_TODO:
                return state.filter
                (
                    todoEdit => todoEdit.id !== action.id
                );
        case BORAR_ALL_TODO:
                return state.filter
                (
                    todoEdit => !todoEdit.completado
                );
        case TOOGLE_ALL_TODO:
                return state.map
                (
                    todoEdit => 
                    {
                        return { ...todoEdit, completado: action.completado }
                    }
                );
            
        default:
            return state;
    }
}