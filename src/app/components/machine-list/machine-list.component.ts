import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machines: any;
  currentMachine = null;
  currentIndex = -1;
  name = '';

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.retrieveMachines();
  }

  retrieveMachines(): void {
    this.machineService.getAll()
      .subscribe(
        data => {
          this.machines = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMachines();
    this.currentMachine = null;
    this.currentIndex = -1;
  }

  setActiveMachine(machine, index): void {
    this.currentMachine = machine;
    this.currentIndex = index;
  }

  removeAllMachines(): void {
    this.machineService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMachines();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.machineService.findByName(this.name)
      .subscribe(
        data => {
          this.machines = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
