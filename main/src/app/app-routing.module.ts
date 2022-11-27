import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BudgetDetailsPage } from './pages/signed-in-tabs/budget/budget-details/budget-details.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'create-profile',
    loadChildren: () =>
      import('./pages/profile/create-profile/create-profile.module').then(
        (m) => m.CreateProfilePageModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/profile/sign-in/sign-in.module').then(
        (m) => m.SignInPageModule
      ),
  },
  {
    path: 'signed-in-home',
    loadChildren: () =>
      import('./pages/signed-in-tabs/signed-in-home.module').then(
        (m) => m.SignedInHomePageModule
      ),
  },
  {
    path: 'details/:index',
    //component: BudgetDetailsPage,
    loadChildren: () =>
      import(
        './pages/signed-in-tabs/budget/budget-details/budget-details.module'
      ).then((m) => m.BudgetDetailsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
