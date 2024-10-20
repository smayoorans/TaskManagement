import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {


  taskId: number
  taskForm: FormGroup;

  constructor(private route: ActivatedRoute, private taskService: TaskService,
    private fb: FormBuilder, private toastr: ToastrService, private router: Router) {

    const tid = this.route.snapshot.paramMap.get("id");
    this.taskId = Number(tid);

    this.taskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.taskService.getTask(this.taskId).subscribe(data => {
      console.log(data);

      let dueDate = new Date(data.dueDate).toISOString().slice(0, 10);

      this.taskForm.patchValue({
        id: data.id,
        title: data.title,
        description: data.description,
        dueDate: dueDate,
        priority: data.priority,
      })
    }, error => {
      this.toastr.error("Task is not found");
    });
  }


  cancel() {
    throw new Error('Method not implemented.');
  }


  onSubmit() {
    const task = this.taskForm.value;

    this.taskService.updateTask(task).subscribe(data => {
      this.toastr.success("Task is updated successfully");
      this.router.navigate(["/"]);
    });
  }

}
