import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMachineComponent} from './components/add-machine/add-machine.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'machines', pathMatch: 'full' },
  { path: 'machines', component: MachineListComponent },
  { path: 'machines/:id', component: MachineDetailsComponent },
  { path: 'add', component: AddMachineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
