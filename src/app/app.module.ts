import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { ComponentDetailsComponent } from './components/component-details/component-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    MachineListComponent,
    MachineDetailsComponent,
    AddComponentComponent,
    ComponentListComponent,
    ComponentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
