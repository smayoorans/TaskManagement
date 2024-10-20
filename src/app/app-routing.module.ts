import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  { path: 'tasks', component: ListTaskComponent },
  { path: 'users', component: UserListComponent },

  { path: 'task-add', component: AddTaskComponent },
  { path: 'user-add', component: UserAddComponent },

  { path: 'task-edit/:id', component: TaskEditComponent },
  { path: 'user-edit/:id', component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
