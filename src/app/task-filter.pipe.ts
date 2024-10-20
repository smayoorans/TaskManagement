import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task[] {
    let searchText = args[0];

    return value.filter(a => a.title.toLowerCase().includes(searchText.toLowerCase())
    || a.description.toLowerCase().includes(searchText.toLowerCase()))

  }

}
