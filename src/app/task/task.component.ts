import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Array<any>;

  curve: any = shape.curveLinear;

  graph = { nodes: [], links: [] }

  constructor(private _dataService: DataService) {

    this._dataService.getTasks()
      .subscribe(res => {
        this.tasks = res
        this.tasks.forEach((task) => {
          this.graph.nodes.push({ id: task.id.toString(), label: task.todo });
          task.parents.forEach((parent) => {
            this.graph.links.push({ source: parent.id.toString(), target: task.id.toString() });
          })
        })
        this.graph.nodes = [...this.graph.nodes];
        this.graph.links = [...this.graph.links];
      });
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
