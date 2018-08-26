import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent, TaskCreateComponent, TaskEditComponent } from './task-components';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: TaskComponent,
			},
			{
				path: 'create',
				component: TaskCreateComponent,
				data: {
					breadcrumb: 'Create'
				}
			},
			{
				path: 'edit/:id',
				component: TaskEditComponent,
				data: {
					breadcrumb: 'Edit'
				}
			}
		]
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
