import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { DataService } from '../../../_services';

declare var wcDocker :any;
declare var wcTabFrame :any;

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

  ngAfterViewInit() {
    var myDocker = new wcDocker($('.page-content'))
    myDocker.registerPanelType('Graph Panel', {
      // Use the simple layout for the entire panel.
      faicon: 'gears',
      title: 'Graph',
      onCreate: function(myPanel) {
        myPanel.initSize(500, 300);
        myPanel.layout().scene().css('padding', '10px');
        myPanel.layout().addItem('.graph-container').stretch('', '100%');
      }
    });

    myDocker.registerPanelType('List Panel', {
      // Use the simple layout for the entire panel.
      faicon: 'cubes',
      title: 'List',
      onCreate: function(myPanel) {
        myPanel.initSize(500, 300);
        myPanel.layout().scene().css('padding', '10px');
        myPanel.layout().addItem('<div>', 0, 2).stretch('', '100%');
      }
    });

    myDocker.startLoading('Loading...');

    var graph_panel = myDocker.addPanel('Graph Panel', wcDocker.DOCK.TOP, null, { h: '200px' });
    myDocker.addPanel('List Panel', wcDocker.DOCK.STACKED, graph_panel, { h: '200px' });

    myDocker.on(wcDocker.EVENT.LOADED, function() {
      myDocker.finishLoading(500);
    });
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