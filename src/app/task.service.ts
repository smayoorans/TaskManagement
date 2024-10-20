import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'https://localhost:7048/api/TaskItems';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any[]>(this.url);
  }

  createTask(task: any) {
    return this.http.post(this.url, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this.url + "/" + taskId);
  }

}



export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}
