import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import { DataService } from '../../../_services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

	task: any;
	tasks: Array<any>;
	taskOptions: Observable<Array<any>>;
	options: any;

	constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) {
		this.task = {id: "", todo: ""};
		this._dataService.getAllTasks()
      		.subscribe(res => {
      			this.tasks = res['data'];
      		});
	}

	ngOnInit() {
		this.options = {
			multiple: true,
			placeholder: 'Select parents'
	    }
		this.getTaskDetail(this.route.snapshot.params['id']);
	}

	getTaskDetail(id) {
		var taskOptions = [];
		this._dataService.getTask(id).subscribe((res) => {
			this.task = res['data'];
	    	this.tasks.forEach((task) => {
				if (task.id != this.task.id)
					taskOptions.push({id: task.id, text: task.todo})
			})
			 this.taskOptions = Observable.create((obs) => {
	            obs.next(taskOptions);
	            obs.complete();
	        });
		}, (err) => {
			console.log(err);
		});
	}

	updateTask(id) {
		this._dataService.updateTask(id, this.task)
		.subscribe((res) => {
			this.router.navigate(['/admin/tasks']);
		}, (err) => {
			console.log(err)
		})
	}

	selectChanged(data: {value: string[]}) {
		this.task.parent_ids = data.value;
	}
}
