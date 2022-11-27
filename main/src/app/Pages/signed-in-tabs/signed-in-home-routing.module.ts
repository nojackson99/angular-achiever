import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignedInHomePage } from './signed-in-home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SignedInHomePage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home-tab.module').then((m) => m.HomePageModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./tasks/tasks.module').then((m) => m.TasksPageModule),
      },
      {
        path: 'budget',
        loadChildren: () =>
          import('./budget/budget-list/budget-list.module').then(
            (m) => m.BudgetPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignedInHomePageRoutingModule {}
