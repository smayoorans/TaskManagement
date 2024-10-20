import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'https://localhost:7048/api/TaskItems';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.url);
  }

  createTask(task: Task) {
    return this.http.post(this.url, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this.url + "/" + taskId);
  }

  getTask(taskId: number) {
    return this.http.get<Task>(this.url + "/" + taskId);
  }

  updateTask(task: Task) {
    return this.http.put(this.url + "/" + task.id, task);
  }

}


export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}
