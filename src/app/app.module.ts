import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    MachineListComponent,
    MachineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
