import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
      import('./Pages/profile/create-profile/create-profile.module').then(
        (m) => m.CreateProfilePageModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./Pages/profile/sign-in/sign-in.module').then(
        (m) => m.SignInPageModule
      ),
  },
  {
    path: 'signed-in-home',
    loadChildren: () =>
      import('./Pages/signed-in-tabs/signed-in-home.module').then(
        (m) => m.SignedInHomePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
