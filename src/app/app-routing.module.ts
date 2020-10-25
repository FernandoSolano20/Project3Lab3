import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponentComponent } from './components/add-component/add-component.component';
import {AddMachineComponent} from './components/add-machine/add-machine.component';
import { ComponentDetailsComponent } from './components/component-details/component-details.component';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'machines', pathMatch: 'full' },
  { path: 'machines/add', component: AddMachineComponent },
  { path: 'machines', component: MachineListComponent },
  { path: 'machines/:id', component: MachineDetailsComponent },
  { path: 'components/add', component: AddComponentComponent },
  { path: 'components', component: ComponentListComponent },
  { path: 'components/:id', component: ComponentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
