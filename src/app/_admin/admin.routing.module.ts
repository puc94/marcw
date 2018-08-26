import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load Layout
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'tasks',
		pathMatch: 'full',
	},
	{
		path: '',
		component: LayoutComponent,
		data: {
			title: 'Admin'
		},
		children: [
			{
				path: 'tasks',
				loadChildren: './task/task.module#TaskModule'
			}
		]
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
