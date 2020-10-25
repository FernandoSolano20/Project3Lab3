import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../services/machine.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  machine = {
    id: 0,
    name: '',
    description: '',
    lastDateMaintenance: new Date(),
    state: ''
  };
  submitted = false;
  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
  }

  saveMachine(): void {
    const data = {
      id: this.machine.id,
      name: this.machine.name,
      description: this.machine.description,
      lastDateMaintenance: this.machine.lastDateMaintenance,
      state: this.machine.state
    };

    this.machineService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMachine(): void {
    this.submitted = false;
    this.machine = {
      id: 0,
      name: '',
      description: '',
      lastDateMaintenance: new Date(),
      state: ''
    };
  }
}
