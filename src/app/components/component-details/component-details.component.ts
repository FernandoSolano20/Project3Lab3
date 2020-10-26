import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService } from 'src/app/services/component.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailsComponent implements OnInit {

  currentComponent = null;
  message = '';
  machines: any;
  error = false;

  constructor(
    private componentService: ComponentService,
    private route: ActivatedRoute,
    private router: Router,
    private machineService: MachineService
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getComponent(this.route.snapshot.paramMap.get('id'));
    this.retrieveMachines();
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

  getComponent(id): void {
    this.componentService.get(id)
      .subscribe(
        data => {
          this.currentComponent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateComponent(): void {
    if(this.currentComponent.name === '' || this.currentComponent.description === ''){
      this.error = true;
      return;
    }
    this.error = false;
    this.componentService.update(this.currentComponent.id, this.currentComponent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Este componente ha sido actualiza con éxito!';
        },
        error => {
          console.log(error);
        });
  }

  deleteComponent(): void {
    this.componentService.delete(this.currentComponent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/components']);
        },
        error => {
          console.log(error);
        });
  }
}
