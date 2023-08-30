import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) }, // Lazy loading
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Si la ruta no matchea con nada existente, redirecciono al login. IMPORTANTE EL ORDEN DEBE IR ULTIMA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
