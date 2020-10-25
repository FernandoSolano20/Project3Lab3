import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  components: any;
  currentComponent = null;
  currentIndex = -1;
  name = '';

  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.retrieveComponents();
  }

  retrieveComponents(): void {
    this.componentService.getAll()
      .subscribe(
        data => {
          this.components = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveComponents();
    this.componentService = null;
    this.currentIndex = -1;
  }

  setActiveComponent(component, index): void {
    this.currentComponent = component;
    this.currentIndex = index;
  }

  searchName(): void {
    this.componentService.findByName(this.name)
      .subscribe(
        data => {
          this.components = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
