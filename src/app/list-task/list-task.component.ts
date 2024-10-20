import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit {

  searchText: string = '';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.loadTask();
  }

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(data => {
      alert('Task is deleted');
      this.loadTask();
    });
  }

  loadTask() {
    this.taskService.getTasks().subscribe(d => {
      this.tasks = d;
    })
  }

}
