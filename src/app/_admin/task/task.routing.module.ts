import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent, TaskCreateComponent, TaskEditComponent } from './task-components';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Task'
		},
		children: [
			{
				path: '',
				component: TaskComponent,
			},
			{
				path: 'create',
				component: TaskCreateComponent
			},
			{
				path: 'edit/:id',
				component: TaskEditComponent
			}
		]
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
