import { Component, OnInit } from '@angular/core';
import {TasksDataService} from '../tasks-data.service';
import {ActivatedRoute, Router} from '@angular/router';

export class Task {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  tasks: Task[];
  message: string;
  username = '';
  constructor(private taskService: TasksDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
    this.refreshTasks();
  }
  refreshTasks() {
    this.taskService.retrieveAllTasks(this.username).subscribe(
      response => {
        console.log(response);
        this.tasks = response;
      }
    );
  }
  deleteTask(id) {
    console.log(`delete task ${id}` );
    this.taskService.deleteTask(this.username, id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Task ${id} Successful!`;
        this.refreshTasks();
      }
    );
  }
  updateTask(id) {
    this.router.navigate([`/tasks/user/${this.username}`, id]);
  }
  addTask() {
    this.router.navigate([`/tasks/user/${this.username}`, -1]);
  }

}
