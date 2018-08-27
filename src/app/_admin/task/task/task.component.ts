import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { DataService } from '../../../_services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Array<any>;

  curve: any = shape.curveLinear;

  graph = { nodes: [], links: [] }

  selectedNodes: Array<number>;

  constructor(private _dataService: DataService) {
    this.selectedNodes = [];
    this._dataService.getTasks()
      .subscribe(res => {
        this.tasks = res['data']
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
    this._dataService.deleteTask(id).subscribe((result) => {
      this.tasks.forEach((task, index) => {
        if (task.id == id) {
          this.tasks.splice(index, 1);
        }
      })
    }, (err) => {
      console.log(err);
    });
  }

  selectNode(e) {
    if (this.isActiveNode(e.id))
      this.selectedNodes.splice(this.selectedNodes.indexOf(e.id), 1)
    else
      this.selectedNodes.push(e.id)
  }

  isActiveNode(id) {
    return this.selectedNodes.includes(id)
  }
}