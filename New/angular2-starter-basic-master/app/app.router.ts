import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientListComponent } from './clientList/clientList.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Route Configuration
export const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'dashboard/:id', component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
