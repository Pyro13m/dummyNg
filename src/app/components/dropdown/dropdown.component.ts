import { DataService } from './../../services/data.service';

// COMPONENT NOT BEING USED IN APP

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MenuIndex {
  menuIndex: number;
  submenuIndex: number;
}

export interface MenuItem{

}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  // stateName: any;
  // @Input()  public menuItems: Array<MenuItem> = [];
  // @Output() public itemSelected = new EventEmitter<MenuIndex>();
  // constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.showAll();
  }
  // showAll(){
  //   this.dataService.getAll()
  //   .subscribe(
  //     (data: any) => {
  //       this.stateName = data.data.locations;

  //       console.log(this.stateName);
  //     }
  //   )
  // }
}
