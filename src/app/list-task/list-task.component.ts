import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit {

  searchText: string = '';

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this.loadTask();
  }

  onDelete(taskId: number) {
    if(confirm('Do you want to delete?')) {
      this.taskService.deleteTask(taskId).subscribe(data => {
        this.toastr.success('Task is deleted', "Deleted", {
          timeOut: 10000,
          closeButton: true
        });
        this.loadTask();
      });
    }
  }

  loadTask() {
    this.taskService.getTasks().subscribe(d => {
      this.tasks = d;
    })
  }

  onEdit(taskId: number) {
    this.router.navigate(['/edit', taskId])
  }

}



