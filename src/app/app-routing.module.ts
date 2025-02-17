import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstformComponent } from './firstform/firstform.component';
import { TableComponent } from './table/table.component';

// Define the routes for navigation
const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' }, // Default route: redirects to 'form'
  { path: 'form', component: FirstformComponent },      // Route for the form page
  { path: 'table', component: TableComponent }           // Route for the table page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register the routes
  exports: [RouterModule]                   // Export for use in the app
})
export class AppRoutingModule { }
