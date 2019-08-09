import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/Models/todo';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: Array<Todo>, filtro: filtrosValidos): Array<Todo>
    {
        // console.table(todos);
        // console.log(filtro);

        switch(filtro)
        {
            case 'completados':
                return todos.filter(todo => todo.completado);
            case 'pendientes':
                return todos.filter(todo => !todo.completado);
            case 'todos':
                return todos;
        }

        // return todos;
    }
}
