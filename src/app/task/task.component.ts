import { Component, OnInit } from '@angular/core';
import {Task} from '../list-tasks/list-tasks.component';
import {TasksDataService} from '../tasks-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id: number;
  task: Task;
  username = '';
  constructor(private taskService: TasksDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.username = this.route.snapshot.params['username'];
    this.task = new Task(this.id, '', false, new Date());

    if (this.id != -1) {
      console.log(this.id);
      this.taskService.retrieveTask(this.username, this.id)
        .subscribe (
          data => this.task = data
        );
    }
  }

  saveTask() {
    if (this.id == -1) {
      this.taskService.createTask(this.username, this.task)
        .subscribe (
          data => {
            console.log(data)
            this.router.navigate(['tasks/user', this.username]);
          }
        );
    } else {
      this.taskService.updateTask(this.username, this.id, this.task)
        .subscribe (
          data => {
            console.log(data)
            this.router.navigate(['tasks/user', this.username]);
          }
        );
    }
  }
}
