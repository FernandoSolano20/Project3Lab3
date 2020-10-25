import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  component = {
    name: '',
    description: '',
    machineId: '',
    comments: ''
  };
  machines: any;
  submitted = false;

  constructor(
    private componentService: ComponentService,
    private machineService: MachineService
  ) { }

  ngOnInit(): void {
    this.retrieveMachines();
    console.log(this.machines);
  }

  retrieveMachines(): void {
    this.machineService.getAll()
      .subscribe(
        data => {
          this.machines = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  saveComponent(): void {
    const data = {
      name: this.component.name,
      description: this.component.description,
      machineId: this.component.machineId,
      comments: this.component.comments
    };

    this.componentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newComponent(): void {
    this.submitted = false;
    this.component = {
      name: '',
      description: '',
      machineId: '',
      comments: ''
    };
  }
}
