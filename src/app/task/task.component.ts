import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getTasks()
      .subscribe(res => this.tasks = res);

  }

  ngOnInit() {
  }

  deleteTask(id) {
    this._dataService.deleteTask(id).then((result) => {
      this.tasks.forEach((task, index) => {
        if (task.id == id) {
          this.tasks.splice(index, 1);
        }
      })
    }, (err) => {
      console.log(err);
    });
  }
}
