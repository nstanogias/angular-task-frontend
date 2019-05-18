import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './list-tasks/list-tasks.component';
import {API_URL} from './app.constants';

@Injectable({
  providedIn: 'root',
})
export class TasksDataService {

  constructor(private http: HttpClient) { }
  retrieveAllTasks(username) {
    return this.http.get<Task[]>(`${API_URL}/users/${username}/tasks`);
  }

  deleteTask(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/tasks/${id}`);
  }

  retrieveTask(username, id) {
    return this.http.get<Task>(`${API_URL}/users/${username}/tasks/${id}`);
  }

  updateTask(username, id, task) {
    return this.http.put(`${API_URL}/users/${username}/tasks/${id}`, task);
  }

  createTask(username, task) {
    return this.http.post(`${API_URL}/users/${username}/tasks`, task);
  }

}
