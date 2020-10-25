import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {

  currentMachine = null;
  message = '';

  constructor(
    private machineService: MachineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getMachine(this.route.snapshot.paramMap.get('id'));
  }

  getMachine(id): void {
    this.machineService.get(id)
      .subscribe(
        data => {
          this.currentMachine = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMachine(): void {
    this.machineService.update(this.currentMachine.id, this.currentMachine)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La máqunina fue actualizada!';
        },
        error => {
          console.log(error);
        });
  }

  deleteMachine(): void {
    this.machineService.delete(this.currentMachine.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/machines']);
        },
        error => {
          console.log(error);
        });
  }
}
