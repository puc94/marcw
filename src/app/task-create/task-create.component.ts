import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
	task: any;
	tasks: Array<any>;
	taskOptions: Observable<Array<any>>;
	options: any;

	constructor(private router: Router, private _dataService: DataService) {
		var taskOptions = [];
		this.task = {todo: "", parent_ids: []};
		this._dataService.getAllTasks()
      		.subscribe(res => {
      			this.tasks = res;
      			this.tasks.forEach((task) => {
					taskOptions.push({id: task.id, text: task.todo})
				})
				 this.taskOptions = Observable.create((obs) => {
		            obs.next(taskOptions);
		            obs.complete();
		        });
      		});
	}

	ngOnInit() {
		this.options = {
			multiple: true,
			placeholder: 'Select parents'
	    }
	}

	createTask() {
		this._dataService.createTask(this.task)
		.then((res) => {
			this.router.navigate(['/']);
		}, (err) => {
			console.log(err)
		})
	}

	selectChanged(data: {value: string[]}) {
		this.task.parent_ids = data.value;
	}
}