import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Task} from '../Task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {
    console.log('Task Service Initialized...');
  }

  public getTasks(): Observable<Array<Task>>{
    return this.http.get<Array<Task>>('/api/tasks');
  }

  addTask(newTask: Task): Observable<Task>{
    return this.http.post<Task>('/api/task', newTask);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>('/api/task/'+task._id);
  }

  updateStatus(task: Task): Observable<Task>{
    return this.http.put<Task>('/api/task/'+task._id, task);
  }
}
