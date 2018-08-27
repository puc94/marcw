import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Load Layout
import { AdminLayoutComponent } from './components';

// Load Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'tasks',
		pathMatch: 'full',
	},
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			// {
			// 	path: 'dashboard',
			// 	component: DashboardComponent,
			// 	data: {
			// 		breadcrumb: 'Dashboard'
			// 	}
			// },
			{
				path: 'tasks',
				loadChildren: './task/task.module#TaskModule',
				data: {
					breadcrumb: 'Tasks'
				},
			}
		]
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
